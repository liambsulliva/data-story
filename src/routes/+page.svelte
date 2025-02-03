<script lang="ts">
	import { onMount } from 'svelte';

	import BarChart from '$lib/BarChart.svelte';
	import InteractiveCollage from '$lib/InteractiveCollage.svelte';
	import Link from '$lib/Link.svelte';

	let isTouchDevice = false;
	onMount(() => {
		if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
			isTouchDevice = true;
		}
	});
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
	<section class="sm:mt-8 lg:mx-8">
		<div class="px-6">
			<div class="flex flex-col items-center gap-16 lg:flex-row">
				<div>
					<p class="py-3 font-proximaNova text-lg">
						There has been a ton of chatter about the grocery prices as of late. Inflation ballooned
						during the pandemic period, and despite the federal reserve’s best efforts, many are
						still reeling from the higher prices that resulted from that period of high inflation.
					</p>
					<p class="py-3 font-proximaNova text-lg">
						One of the major points that president-elect Donald Trump ran on in his 2024 campaign
						was lowering the cost of grocery items. Namely, the <Link
							href="https://www.newsweek.com/trump-promised-cheaper-eggscan-he-crack-it-2020449"
							>cost of eggs</Link
						>.
					</p>
					<p class="py-3 font-proximaNova text-lg">
						But are groceries as expensive as people make them out to be? It depends. Staple complex
						carbohydrates like corn and wheat are grown domestically in the United States. <Link
							href="https://en.wikipedia.org/wiki/Corn_syrup">Corn syrup</Link
						> is used in so many processed foods because of how cheap it is to manufacture. It doesn't
						require any sort of foreign imports to make while being irresistably delicious. The domestic
						availability factor is the reason we consistently reach out to the corn substance and not,
						say, agave syrup.
					</p>
				</div>
				<div>
					<div class="relative">
						<div
							class="text-md absolute -top-2.5 right-20 z-10 border border-[#000] bg-white px-4 py-2 font-proximaNova text-lg font-bold shadow-[4px_4px_0px_#000] lg:-right-2.5"
						>
							{isTouchDevice ? 'Drag Me!' : 'Hover Me!'}
							<div class="absolute -right-20 -top-12 w-24 rotate-12">
								<img src="/emphasis-scribble.svg" alt="Emphasis Scribble" />
							</div>
						</div>
						<InteractiveCollage />
					</div>
				</div>
			</div>
			<p class="py-3 font-proximaNova text-lg">
				Fruit is a little different though. Fruits are seasonally grown, can only grow in specific
				environments, and need to be kept in specific conditions to remain fresh for the end
				consumer. As such, there is a large degree of variability in how much certain fruits cost.
			</p>
			<p class="py-3 font-proximaNova text-lg">
				This makes fruits act as a microcosm of the grocery market. Looking at the prices of fruits
				can leave clues as to the economic viability of foreign imports from certain countries over
				others. It can also reveal characteristics of the fruits themselves. Which are more likely
				to spoil? Which are harder to grow?
			</p>
			<p class="py-3 font-proximaNova text-lg">
				This write-up will explore these trends and help to demystify the sometimes massive
				differences in how certain fruits are priced, relative to the rest of the market. It'll
				tackle all of fruit's different marketable forms. Fresh, canned, juiced, nothing is off
				limits.
			</p>
			<p class="py-3 font-proximaNova text-lg">Let's dive in.</p>
		</div>
	</section>
	<section class="mt-32 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Fresh</h2>
			<img src="/Apple.svg" alt="Apple" />
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/header-scribble.svg" alt="Underline" class="w-32" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Fresh'}
				fruits={[
					'Apples',
					'Bananas',
					'Blueberries',
					'Blackberries',
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
				<p class="mt-8 py-3 font-proximaNova text-lg">
					Looking at the full graph, there are a few trends that jump out immediately. For one,
					small fruits like berries are far more likely to be expensive. Interestingly, tropical
					fruits are generally the least expensive, despite the fact that they need to grow in very
					specific environments.
				</p>
			</div>
			<BarChart
				form={'Fresh'}
				fruits={['Raspberries', 'Blueberries', 'Blackberries', 'Cherries', 'Strawberries']}
			/>
			<div class="my-8">
				<p class="mt-8 py-3 font-proximaNova text-lg">
					Raspberries ($7.73/lb) and Blackberries ($6.75/lb) are among the most expensive fruits
					when bought fresh. This is in large part because they are both small, fragile berries.
					Berries are almost always hand-picked, being very difficult to automate due to their
					variability in time to ripen and their small size. Raspberries are especially bad, being
					one of the most fragile fruits and extremely quick to spoil. Special care needs to be put
					into their harvest and transport to ensure that they aren't crushed or spoiled by the time
					they reach the final buyer. This explains its price nearly doubling that of the third most
					expensive fruit, cherries.
				</p>
				<p class="py-3 font-proximaNova text-lg">
					Cherries ($4.66/lb) also fall victim to the small fruit problem, and are difficult to
					automate because of that fact. They're hard to grow well, being grown mainly in a 4 month
					period between late spring and early summer in California, Oregon, and Washington. They
					are also not ripe for very long, needing to be carefully monitored to ensure they don't
					spoil.<Link href="https://www.mashed.com/194002/why-are-cherries-so-expensive/"
						><sup>1</sup></Link
					>
				</p>
				<p class="py-3 font-proximaNova text-lg">
					Strawberries ($2.97/lb) suffer from the berry problem, but are a little bigger and
					tougher. Additionally, strawberries can grow in a variety of climates and soil types,
					which gives growers much more flexibility in how they are grown. They have a longer
					growing season, which helps to extend their supply window.
				</p>
			</div>
			<BarChart form={'Fresh'} fruits={['Mangoes', 'Bananas', 'Pineapple', 'Watermelon']} />
			<div class="my-8">
				<p class="py-3 font-proximaNova text-lg">
					Narrowing in on the tropical fruits reveals that Mangoes ($1.47/lb) are easily the most
					expensive, easily doubling the price of Pineapples ($0.62/lb) and Bananas ($0.60/lb).
					Considering that they all grow in similar climates, this doesn't make much sense at first.
					However, mangoes are heavier than bananas without having the rugged exterior that
					pineapples and watermelons do. They need to be specially packaged to ensure that they both
					won't smash other fruits and won't get smashed themselves.
				</p>
				<p class="py-3 font-proximaNova text-lg">
					But Watermelons ($0.38/lb) are incredibly heavy, right? So why would it be the cheapest
					fruit to buy fresh? For one, watermelons have tough rinds that keep bacteria and animals
					out. This means that growers don't need to worry about cutting into their profit margins
					with pesticides. Also, watermelon benefit from a very small delta in quality among
					producers. Generally, the worst quality watermelon will be considered "good enough" to the
					average consumer. Grocery supply chains will buy the cheapest watermelons, in order to
					pass those savings on to the consumer. Buyers won't notice a small drop in quality, but
					they will notice an increase in price.
				</p>
				<p class="py-3 font-proximaNova text-lg">
					Since we are comparing prices pound-for-pound, watermelons enjoy a distinct advantage
					here, being both heavy (full of water!) and easy to distribute throughout the supply
					chain.
				</p>
			</div>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Frozen</h2>
			<img src="/Plum.svg" alt="Plum" />
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/header-scribble.svg" alt="Underline" class="w-36" />
			</div>
		</div>
		<div class="mx-6">
			<BarChart
				form={'Frozen'}
				fruits={['Blueberries', 'Blackberries', 'Raspberries', 'Strawberries']}
			/>
			<p class="mt-8 py-3 font-proximaNova text-lg">
				At first glance, frozen fruit seems to mirror that of fresh berries. In some ways, this is
				true. The rankings are exactly the same, with raspberries being on top for most expensive,
				followed by blackberries, blueberries, and strawberries. However, the deviation between
				fruit prices is much tighter this time around.
			</p>
			<p class="py-3 font-proximaNova text-lg">
				This is because raspberries and blackberries become over a dollar cheaper when frozen.
				Considering their quick perishability, this makes a lot of sense. Frozen produce can be kept
				nearly indefinitely. This means that any fruit that is quick to perish will enjoy
				significant price cuts, since the distributor can keep the fruit flowing through the supply
				chain for longer.
			</p>
			<p class="py-3 font-proximaNova text-lg"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Canned</h2>
			<img src="/Pineapple.svg" alt="Pineapple" />
			<div class="absolute -bottom-1 left-0 right-0">
				<img src="/header-scribble.svg" alt="Underline" class="w-40" />
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
			<p class="mt-8 py-3 font-proximaNova text-lg">
				Cherries immediately jump out as an outlier here. Most of the fruits average around $2/lb,
				but cherries sit at a staggering $5.24/lb. This is for a few reasons. For one, the other
				fruits are significantly larger than cherries, and thus distributors can fill a storage
				pallet with less of those other fruits and make more per sale. Also, cherries lose a lot of
				their volume when dried out, meaning that more cherries need to be packed into a single
				container.
			</p>
			<p class="py-3 font-proximaNova text-lg"></p>
			<p class="py-3 font-proximaNova text-lg"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-4 text-center font-freightText text-5xl font-bold">Dried</h2>
			<img src="/Tomato.svg" alt="Tomatoes" />
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/header-scribble.svg" alt="Underline" class="w-32" />
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
			<p class="mt-8 py-3 font-proximaNova text-lg"></p>
			<p class="py-3 font-proximaNova text-lg"></p>
			<p class="py-3 font-proximaNova"></p>
		</div>
	</section>
	<section class="mt-36 lg:mx-8">
		<div class="relative mx-6 mb-12 inline-flex items-center">
			<h2 class="mr-2 text-center font-freightText text-5xl font-bold">Juice</h2>
			<img src="/Lemons.svg" alt="Lemons" />
			<div class="absolute bottom-0 left-0 right-0">
				<img src="/header-scribble.svg" alt="Underline" class="w-32" />
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
			<p class="mt-8 py-3 font-proximaNova text-lg"></p>
			<p class="py-3 font-proximaNova text-lg"></p>
			<p class="py-3 font-proximaNova"></p>
		</div>
	</section>
</main>
<footer class="m-4 font-proximaNova">
	<p>Made with ❤️ by <Link href="https://liambsullivan.com">Liam Sullivan</Link></p>
</footer>
