<script lang="ts">
	import BarChart from '$lib/BarChart.svelte';
	import FruitGraphic from '$lib/FruitGraphic.svelte';
	import Link from '$lib/Link.svelte';
	import Apple from '/src/assets/Apple.svg?raw';
	import Broccoli from '/src/assets/Broccoli.svg?raw';
	import Pepper from '/src/assets/Pepper.svg?raw';
	import Orange from '/src/assets/Orange.svg?raw';
	import Lemons from '/src/assets/Lemons.svg?raw';
	import Grapes from '/src/assets/Grapes.svg?raw';
</script>

<main class="mx-auto w-full max-w-[1200px]">
	<div class="flex justify-center">
		<div class="relative inline-flex">
			<h1 class="m-12 text-center font-freightText text-5xl font-bold">
				Is Produce Really All That Expensive?
			</h1>
			<div class="absolute bottom-6 left-12 right-12 h-[2px] rotate-[0.5deg] bg-black"></div>
			<div class="absolute bottom-6 left-12 right-12 h-[2px] -rotate-[0.5deg] bg-black"></div>
		</div>
	</div>
	<section class="mx-8 my-20 max-lg:my-8">
		<div class="flex flex-col justify-between gap-8 px-6 max-lg:items-center lg:flex-row">
			<div>
				<p class="py-3">
					There has been a ton of chatter about grocery prices as of late. Inflation ballooned
					during the pandemic period, and despite the federal reserve’s best efforts, many are still
					reeling from the higher prices that resulted from that period of high inflation.
				</p>
				<p class="py-3">
					One of the major points that president-elect Donald Trump ran on in his 2024 campaign was
					lowering the cost of groceries. Namely, the <Link
						href="https://www.newsweek.com/trump-promised-cheaper-eggscan-he-crack-it-2020449"
						>cost of eggs</Link
					>.
				</p>
				<p class="py-3">But was produce ever all that expensive? Let’s break it down.</p>
			</div>
			<div>
				<div class="relative">
					<div
						class="text-md absolute -right-2.5 -top-2.5 z-10 border px-4 py-2 font-bold shadow-[4px_4px_0px_#f0f0f0]"
					>
						Hover Me!
					</div>
					<FruitGraphic svg1={Broccoli} svg2={Pepper} svg3={Orange} />
				</div>
			</div>
		</div>
	</section>
	<section class="mx-8 my-24">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Fresh</h2>
			{@html Apple}
			<div class="absolute bottom-1 left-0 right-0 h-[2px] rotate-[1deg] bg-black"></div>
			<div class="absolute bottom-1 left-0 right-0 h-[2px] -rotate-[1deg] bg-black"></div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="py-6"></p>
				<p class="py-6"></p>
				<p class="py-6"></p>
			</div>
			<div>
				<BarChart priceUnit="per pound" fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mx-8 my-24">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-4 text-center font-freightText text-5xl font-bold">Frozen</h2>
			{@html Grapes}
			<div class="absolute bottom-1 left-0 right-0 h-[2px] rotate-[1deg] bg-black"></div>
			<div class="absolute bottom-1 left-0 right-0 h-[2px] -rotate-[1deg] bg-black"></div>
		</div>
		<div class="flex flex-row justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart priceUnit="per pound" fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mx-8 my-24">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Canned</h2>
			{@html Lemons}
			<div class="absolute bottom-1 left-0 right-0 h-[2px] rotate-[1deg] bg-black"></div>
			<div class="absolute bottom-1 left-0 right-0 h-[2px] -rotate-[1deg] bg-black"></div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart priceUnit="per pound" fruits={['Mangoes']} />
			</div>
		</div>
	</section>
</main>
