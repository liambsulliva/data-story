<script lang="ts">
	import * as d3 from 'd3';

	interface FruitData {
		Fruit: string;
		Form: string;
		RetailPrice: number;
		RetailPriceUnit: string;
		Yield: number;
		CupEquivalentSize: number;
		CupEquivalentUnit: string;
		CupEquivalentPrice: number;
	}

	const { fruits = [], form = '' } = $props<{
		fruits: string[];
		form?: string;
	}>();
	let chartContainer: HTMLElement;

	// Parse CSV
	const loadData = async (): Promise<FruitData[]> => {
		const response = await fetch('/src/data/Fruit-Prices-2022.csv');
		const text = await response.text();
		return d3.csvParse(text) as unknown as FruitData[];
	};

	const createChart = async () => {
		d3.select(chartContainer).selectAll('*').remove();

		// Load data based on props
		const data = await loadData();
		const filteredData = data
			.filter((d) => {
				const matchesFruit = fruits.includes(d.Fruit);
				const matchesForm = form ? d.Form === form : true;
				return matchesFruit && matchesForm;
			})
			.sort((a, b) => b.RetailPrice - a.RetailPrice);

		const margin = { top: 20, right: 20, bottom: 60, left: 60 };
		const width = 800 - margin.left - margin.right;
		const height = 400 - margin.top - margin.bottom;

		// Create Chart SVG
		const svg = d3
			.select(chartContainer)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		const x = d3
			.scaleBand()
			.domain(filteredData.map((d) => d.Fruit))
			.range([0, width])
			.padding(0.1);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(filteredData, (d) => d.RetailPrice) || 0])
			.range([height, 0]);

		svg
			.selectAll('rect')
			.data(filteredData)
			.enter()
			.append('rect')
			.attr('x', (d) => x(d.Fruit) || 0)
			.attr('y', (d) => y(d.RetailPrice))
			.attr('width', x.bandwidth())
			.attr('height', (d) => height - y(d.RetailPrice))
			.attr('fill', '#4299e1')
			.attr('rx', 4)
			.on('mouseover', function (event, d) {
				d3.select(this).transition().duration(200).attr('fill', '#2b6cb0');

				tooltip
					.style('opacity', 1)
					.html(
						`${d.Fruit}<br/>${d.Form}<br/>Price: ${d.RetailPrice.toFixed(2)} ${d.RetailPriceUnit}`
					)
					.style('left', event.pageX + 10 + 'px')
					.style('top', event.pageY - 28 + 'px');
			})
			.on('mouseout', function () {
				d3.select(this).transition().duration(200).attr('fill', '#4299e1');

				tooltip.style('opacity', 0);
			});

		// Axes
		svg
			.append('g')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('transform', 'rotate(-45)')
			.style('text-anchor', 'end');

		svg.append('g').call(d3.axisLeft(y));

		// Axis labels
		svg
			.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', 0 - margin.left)
			.attr('x', 0 - height / 2)
			.attr('dy', '1em')
			.style('text-anchor', 'middle')
			.text('Retail Price');

		// TODO: Flesh out tooltips on hover here
		const tooltip = d3
			.select(chartContainer)
			.append('div')
			.style('opacity', 0) // Hide for now
			.attr('class', 'tooltip')
			.style('position', 'absolute')
			.style('background-color', 'white')
			.style('border', '1px solid #ddd')
			.style('border-radius', '4px')
			.style('padding', '8px')
			.style('pointer-events', 'none');
	};

	// Update chart on mount OR when props change
	$effect(() => {
		if (chartContainer && form && fruits.length > 0) {
			createChart();
		}
	});
</script>

<div class="chart-container" bind:this={chartContainer}></div>

<style>
	.chart-container {
		width: 800px;
		height: 400px;
		margin: 0 auto;
	}
</style>
