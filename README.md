# How Expensive is Fruit? - A Data Story

This static website provides an engaging exploration of fruit prices, utilizing reactive graphs that adapt to the user's device for an optimal viewing experience no matter how you're interacting with the site.

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring that the graphs and content adjust seamlessly to different screen sizes, from mobile devices to large desktop displays.
- **Reactive Graphs**: Interactive graphs built with D3.js that dynamically update based on the data provided, allowing users to visualize fruit prices in various forms (fresh, frozen, canned, dried, and juiced).
- **SvelteKit Prerendering**: The site leverages SvelteKit's prerendering capabilities, loading HTML at build time. This approach enhances performance by serving pre-built pages instead of relying solely on JavaScript to render the DOM.
- **Homey Aesthetic**: The design features a charming, hand-drawn style reminiscent of your local farmer's market, creating a warm and inviting atmosphere for users.

## Getting Started

The easiest way to see the project is to check out the live link at https://dnid-data-story.vercel.app

But if you want to be crafty and run it locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/liambsulliva/dnid-data-story.git
   cd dnid-data-story
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the project in action.

## Built With

- [SvelteKit](https://kit.svelte.dev) - The framework used for building the site.
- [D3.js](https://d3js.org) - A JavaScript library for producing dynamic, interactive data visualizations in web browsers.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for styling the application.
