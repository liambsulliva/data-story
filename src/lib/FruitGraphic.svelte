<script lang="ts">
	import { spring } from 'svelte/motion';
	import { writable } from 'svelte/store';

	// 3D position for spring()
	interface Position {
		x: number;
		y: number;
		z: number;
	}

	export let svg1: string;
	export let svg2: string;
	export let svg3: string;
	// SVG size
	export let size: number = 300;

	const z1 = writable(1);
	const z2 = writable(1);
	const z3 = writable(1);

	// Default positions
	const defaults = {
		svg1: { x: -80, y: -60, z: 1 },
		svg2: { x: 80, y: -60, z: 1 },
		svg3: { x: 20, y: 60, z: 1 }
	};

	// Spring stores for each SVG's position
	// TODO: Use updated Spring object in @svelte/motion
	const pos1 = spring<Position>(defaults.svg1, {
		stiffness: 0.1,
		damping: 0.6
	});
	const pos2 = spring<Position>(defaults.svg2, {
		stiffness: 0.1,
		damping: 0.6
	});
	const pos3 = spring<Position>(defaults.svg3, {
		stiffness: 0.1,
		damping: 0.6
	});

	function handleMouseMove(
		event: MouseEvent,
		pos: typeof pos1,
		defaultPos: Position,
		activeZ: typeof z1
	) {
		const container = event.currentTarget as HTMLDivElement;
		const rect = container.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		// Calc center of object
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Further mouse is away from center, the more it sticks to original point
		const deltaX = (mouseX - centerX) / 10;
		const deltaY = (mouseY - centerY) / 10;

		// Set other fruits to z-1
		z1.set(activeZ === z1 ? 3 : 1);
		z2.set(activeZ === z2 ? 3 : 1);
		z3.set(activeZ === z3 ? 3 : 1);

		pos.set({
			x: defaultPos.x + deltaX,
			y: defaultPos.y + deltaY,
			z: 3 // This z is just for the spring animation, not used for display
		});
	}

	function handleMouseLeave(pos: typeof pos1, defaultPos: Position) {
		pos.set({ ...defaultPos });
	}
</script>

<div class="collage-container">
	<div
		class="svg-container"
		style="
                transform: translate({$pos1.x}px, {$pos1.y}px);
                z-index: {$z1};
                width: {size}px;
                height: {size}px;
            "
		on:mousemove={(e) => handleMouseMove(e, pos1, defaults.svg1, z1)}
		on:mouseleave={() => handleMouseLeave(pos1, defaults.svg1)}
	>
		{@html svg1}
	</div>
	<div
		class="svg-container"
		style="
                transform: translate({$pos2.x}px, {$pos2.y}px);
                z-index: {$z2};
                width: {size}px;
                height: {size}px;
            "
		on:mousemove={(e) => handleMouseMove(e, pos2, defaults.svg2, z2)}
		on:mouseleave={() => handleMouseLeave(pos2, defaults.svg2)}
	>
		{@html svg2}
	</div>
	<div
		class="svg-container"
		style="
                transform: translate({$pos3.x}px, {$pos3.y}px);
                z-index: {$z3};
                width: {size}px;
                height: {size}px;
            "
		on:mousemove={(e) => handleMouseMove(e, pos3, defaults.svg3, z3)}
		on:mouseleave={() => handleMouseLeave(pos3, defaults.svg3)}
	>
		{@html svg3}
	</div>
</div>

<style>
	.collage-container {
		position: relative;
		width: 450px;
		height: 450px;
		/* background-color: #f0f0f0; */
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.svg-container {
		position: absolute;
		cursor: pointer;
		transition: z-index 0.1s ease;
	}

	.svg-container :global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
