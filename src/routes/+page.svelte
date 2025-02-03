<script lang="ts">
	import BarChart from '$lib/BarChart.svelte';
	import InteractiveCollage from '$lib/InteractiveCollage.svelte';
	import Link from '$lib/Link.svelte';
	import Apple from '/src/assets/Apple.svg?raw';
	import Grapes from '/src/assets/Grapes.svg?raw';
	import Pomegranate from '/src/assets/Pomegranate.svg?raw';
	import Peach from '/src/assets/Peach.svg?raw';
	import Lemons from '/src/assets/Lemons.svg?raw';
	import Plum from '/src/assets/Plum.svg?raw';
	import Pineapple from '/src/assets/Pineapple.svg?raw';
	import EmphasisScribble from '/src/assets/emphasis-scribble.svg?raw';
</script>

<main class="mx-auto w-full max-w-[1200px]">
	<div class="flex justify-center">
		<div class="relative inline-flex">
			<h1 class="m-24 text-center font-freightText text-5xl font-bold max-md:mx-6">
				How Expensive Are Fruits, Really?
			</h1>
			<div class="absolute bottom-[5rem] left-12 right-12 h-[2px] bg-black"></div>
			<div class="absolute bottom-[4.75rem] left-12 right-12 h-[2px] bg-black"></div>
		</div>
	</div>
	<section class="sm:mt-16 lg:mx-8">
		<div class="flex flex-col justify-between gap-8 px-6 max-lg:items-center lg:flex-row">
			<div>
				<p class="font-proximaNova py-3 text-lg">
					There has been a ton of chatter about the grocery prices as of late. Inflation ballooned
					during the pandemic period, and despite the federal reserve’s best efforts, many are still
					reeling from the higher prices that resulted from that period of high inflation.
				</p>
				<p class="font-proximaNova py-3 text-lg">
					One of the major points that president-elect Donald Trump ran on in his 2024 campaign was
					lowering the cost of grocery items. Namely, the <Link
						href="https://www.newsweek.com/trump-promised-cheaper-eggscan-he-crack-it-2020449"
						>cost of eggs</Link
					>.
				</p>
				<p class="font-proximaNova py-3 text-lg">
					But are groceries as expensive as people make them out to be? It depends. Let's break it
					down, focussing specifically on the cost of different forms of fruit.
				</p>
			</div>
			<div>
				<div class="relative">
					<div
						class="text-md absolute -right-2.5 -top-2.5 z-10 border px-4 py-2 font-freightText text-lg font-bold shadow-[4px_4px_0px_#f0f0f0] max-lg:hidden"
					>
						Hover Me!
						<div class="absolute -right-20 -top-12 w-24 rotate-12">
							{@html EmphasisScribble}
						</div>
					</div>
					<InteractiveCollage svg1={Pomegranate} svg2={Peach} svg3={Grapes} />
				</div>
			</div>
		</div>
	</section>
	<section class="mt-12 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Fresh</h2>
			{@html Apple}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Fresh'}
				fruits={[
					'Apples',
					'Bananas',
					'Blueberries',
					'Cantaloupe',
					'Cherries',
					'Grapes',
					'Kiwi',
					'Mangoes',
					'Pears',
					'Pineapple',
					'Plum',
					'Raspberries',
					'Strawberries',
					'Watermelon'
				]}
			/>
			<div class="my-8">
				<p class="font-proximaNova mt-8 py-3 text-lg">
					Raspberries ($7.73/lb) and Blueberries ($4.16/lb) are among the most expensive fruits when
					bought fresh. This is in large part because they are both small berries. Berries are
					almost always hand-picked, being very difficult to automate due to their variability in
					time to ripen and their small size. Raspberries are especially bad, being both fragile and
					extremely quick to spoil. Special care needs to be put into their harvest and transport to
					ensure that they aren't crushed or spoiled by the time they reach the final buyer. This
					explains their price nearly doubling that of the second most expensive fruit, cherries.
				</p>
				<p class="font-proximaNova py-3 text-lg">
					Strawberries ($2.97/lb) suffer from the berry problem, but are a little bigger and
					tougher. Additionally, strawberries can grow in a variety of climates and soil types,
					which gives growers much more flexibility in how they are grown. They have a longer
					growing season, which helps to extend the supply window.
				</p>
				<p class="font-proximaNova py-3 text-lg">
					Cherries ($4.66/lb) also fall victim to the small fruit problem, and are difficult to
					automate because of that fact. They're hard to grow well, being grown mainly in a 4 month
					period between late spring and early summer in California, Oregon, and Washington. They
					are also not ripe for very long, needing to be carefully monitored to ensure they don't
					spoil.<Link href="https://www.mashed.com/194002/why-are-cherries-so-expensive/"
						><sup>1</sup></Link
					>
				</p>
			</div>
			<BarChart
				form={'Fresh'}
				fruits={['Mangoes', 'Bananas', 'Cantaloupe', 'Pineapple', 'Watermelon']}
			/>
			<div class="my-8">
				<p class="font-proximaNova py-3 text-lg">Looking at some of the</p>
			</div>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Frozen</h2>
			{@html Plum}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-36" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart form={'Frozen'} fruits={['Blueberries', 'Raspberries', 'Strawberries']} />
			<p class="font-proximaNova mt-8 py-3 text-lg"></p>
			<p class="font-proximaNova py-3 text-lg"></p>
			<p class="font-proximaNova py-3"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Canned</h2>
			{@html Pineapple}
			<div class="absolute -bottom-1 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-40" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Canned'}
				fruits={[
					'Apples, applesauce',
					'Apricots, packed in syrup or water',
					'Cherries, packed in syrup or water',
					'Peaches, packed in syrup or water',
					'Pears, packed in syrup or water',
					'Pineapple, packed in syrup or water'
				]}
			/>
			<p class="font-proximaNova mt-8 py-3 text-lg"></p>
			<p class="font-proximaNova py-3 text-lg"></p>
			<p class="font-proximaNova py-3"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-4 text-center font-freightText text-5xl font-bold">Dried</h2>
			{@html Grapes}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Dried'}
				fruits={[
					'Mangoes',
					'Pineapple',
					'Dates',
					'Figs',
					'Cranberries',
					'Apricots',
					'Grapes (raisins)',
					'Plum (prunes)',
					'Papaya'
				]}
			/>
			<p class="font-proximaNova mt-8 py-3 text-lg"></p>
			<p class="font-proximaNova py-3 text-lg"></p>
			<p class="font-proximaNova py-3"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Juice</h2>
			{@html Lemons}
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/src/assets/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Juice'}
				fruits={[
					'Apples, ready-to-drink',
					'Grapefruit, ready-to-drink',
					'Grapes, ready-to-drink',
					'Oranges, ready-to-drink',
					'Pineapple, ready-to-drink',
					'Pomegranate, ready-to-drink'
				]}
			/>
			<p class="font-proximaNova mt-8 py-3 text-lg"></p>
			<p class="font-proximaNova py-3 text-lg"></p>
			<p class="font-proximaNova py-3"></p>
		</div>
	</section>
</main>
