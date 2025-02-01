<script lang="ts">
	import BarChart from '$lib/BarChart.svelte';
	import InteractiveCollage from '$lib/InteractiveCollage.svelte';
	import Link from '$lib/Link.svelte';
	import Apple from '/src/assets/Apple.svg?raw';
	import Broccoli from '/src/assets/Broccoli.svg?raw';
	import Pepper from '/src/assets/Pepper.svg?raw';
	import Orange from '/src/assets/Orange.svg?raw';
	import Lemons from '/src/assets/Lemons.svg?raw';
	import Grapes from '/src/assets/Grapes.svg?raw';
	import EmphasisScribble from '/src/assets/emphasis-scribble.svg?raw';
</script>

<main class="mx-auto w-full max-w-[1200px]">
	<div class="flex justify-center">
		<div class="relative inline-flex">
			<h1 class="m-24 text-center font-freightText text-5xl font-bold">
				How Expensive Are Fruits, Really?
			</h1>
			<div class="absolute bottom-[5rem] left-12 right-12 h-[2px] bg-black"></div>
			<div class="absolute bottom-[4.75rem] left-12 right-12 h-[2px] bg-black"></div>
		</div>
	</div>
	<section class="sm:mt-16">
		<div class="flex flex-col justify-between gap-8 px-6 max-lg:items-center lg:flex-row">
			<div>
				<p class="font-proximaNova py-3">
					There has been a ton of chatter about the grocery prices as of late. Inflation ballooned
					during the pandemic period, and despite the federal reserve’s best efforts, many are still
					reeling from the higher prices that resulted from that period of high inflation.
				</p>
				<p class="font-proximaNova py-3">
					One of the major points that president-elect Donald Trump ran on in his 2024 campaign was
					lowering the cost of grocery items. Namely, the <Link
						href="https://www.newsweek.com/trump-promised-cheaper-eggscan-he-crack-it-2020449"
						>cost of eggs</Link
					>.
				</p>
				<p class="font-proximaNova py-3">
					But are groceries as expensive as people make them out to be? It depends. Let's break it
					down, focussing specifically on the cost of different forms of fruit.
				</p>
			</div>
			<div>
				<div class="relative">
					<div
						class="text-md absolute -right-2.5 -top-2.5 z-10 border px-4 py-2 font-freightText text-lg font-bold shadow-[4px_4px_0px_#f0f0f0] max-md:hidden"
					>
						Hover Me!
						<div class="absolute -right-20 -top-12 w-24 rotate-12">
							{@html EmphasisScribble}
						</div>
					</div>
					<InteractiveCollage svg1={Broccoli} svg2={Pepper} svg3={Orange} />
				</div>
			</div>
		</div>
	</section>
	<section class="mt-12">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Fresh</h2>
			{@html Apple}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="py-6"></p>
				<p class="py-6"></p>
				<p class="py-6"></p>
			</div>
			<div>
				<BarChart form={'Fresh'} fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mt-36">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-4 text-center font-freightText text-5xl font-bold">Frozen</h2>
			{@html Grapes}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-36" />
			</div>
		</div>
		<div class="flex flex-row justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart form={'Frozen'} fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mt-36">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Canned</h2>
			{@html Lemons}
			<div class="absolute -bottom-1 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-40" />
			</div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart form={'Canned'} fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mt-36">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Dried</h2>
			{@html Lemons}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart form={'Canned'} fruits={['Mangoes']} />
			</div>
		</div>
	</section>
	<section class="mt-36">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Juice</h2>
			{@html Lemons}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="flex flex-row-reverse justify-between gap-4">
			<div>
				<p class="my-6"></p>
				<p class="my-6"></p>
				<p class="my-6"></p>
			</div>
			<div>
				<BarChart form={'Canned'} fruits={['Mangoes']} />
			</div>
		</div>
	</section>
</main>
