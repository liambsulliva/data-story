<script lang="ts">
	import { hierarchy, tree } from 'd3-hierarchy';
	import { linkVertical } from 'd3-shape';

	interface TreeNode {
		id: string;
		name: string;
		children?: TreeNode[];
		collapsed?: boolean;
	}

	const treeData = $derived<TreeNode>({
		id: 'root',
		name: 'Root',
		collapsed: false,
		children: [
			{
				id: 'child1',
				name: 'Child 1',
				collapsed: false,
				children: [
					{ id: 'grandchild1', name: 'Grandchild 1' },
					{ id: 'grandchild2', name: 'Grandchild 2' }
				]
			},
			{ id: 'child2', name: 'Child 2' }
		]
	});

	// Frame info
	const width = 800;
	const height = 600;
	const margin = 40;
	const nodeWidth = 100;
	const nodeHeight = 40;

	// Config
	const treeLayout = tree<TreeNode>()
		.size([width - 2 * margin, height - 2 * margin])
		.nodeSize([nodeWidth, nodeHeight]);

	// Node hierarchy
	let root = $derived(hierarchy(treeData, (d) => (d.collapsed ? null : d.children)));
	let links = $derived(root.links());
	let nodes = $derived(root.descendants());

	$effect(() => {
		treeLayout(root);
	});

	// TODO: Update type declarations here
	const linkGenerator = linkVertical()
		.x((d: any) => d.x)
		.y((d: any) => d.y);

	// Toggle node collapse
	function toggle(node: typeof root) {
		node.data.collapsed = !node.data.collapsed;
	}
</script>

<svg {width} {height}>
	<g transform="translate({margin}, {margin})">
		{#each links as link (link.source.data.id + link.target.data.id)}
			<path
				d={linkGenerator({
					source: [link.source.x ?? 0, link.source.y ?? 0],
					target: [link.target.x ?? 0, link.target.y ?? 0]
				})}
				fill="none"
				stroke="#999"
				stroke-opacity="0.4"
				stroke-width="1.5"
			/>
		{/each}
		{#each nodes as node (node.data.id)}
			<g
				transform="translate({node.x}, {node.y})"
				on:click={() => toggle(node)}
				style="cursor: pointer;"
			>
				<circle
					r="8"
					fill={node.data.children?.length ? '#3388cc' : '#cccccc'}
					stroke="#fff"
					stroke-width="1.5"
				/>
				<text
					dx={node.children ? '-12' : '12'}
					dy=".35em"
					style="font-size: 12px; font-family: sans-serif;"
					text-anchor={node.children ? 'end' : 'start'}
				>
					{node.data.name}
				</text>
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		border: 1px solid #eee;
	}
</style>
