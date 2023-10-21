<script lang="ts">
	import { SvgLogo } from 'components'
</script>

<svelte:head>
	<title>Tubly: Your Youtube Videos Summary Assistant</title>
	<meta name="description" content="Get concise summaries of YouTube videos with Tubly. Free users enjoy summaries for up to 3 short videos daily. Upgrade for unlimited access and audio summaries.">
	<link rel="canonical" href="https://dev.tubly.app">
	<meta name="robots" content="index,follow">
	<!-- Open Graph -->
	<meta property="og:title" content="Tubly: Your Video Summary Assistant">
	<meta property="og:description" content="Get concise summaries of YouTube videos with SummarizeMe. Free users enjoy summaries for up to 3 short videos daily. Upgrade for unlimited access and audio summaries.">
	<meta property="og:image" content="https://dev.tubly.app/play.png">
	<meta property="og:url" content="https://dev.tubly.app">
	<!-- Twitter Cards -->
	<meta name="twitter:title" content="SummarizeMe: Your Video Summary Assistant">
	<meta name="twitter:description" content="Get concise summaries of YouTube videos with Tubly. Free users enjoy summaries for up to 3 short videos daily. Upgrade for unlimited access and audio summaries.">
	<meta name="twitter:image" content="https://dev.tubly.app/play.png">
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>

<header class="p-4 dark:bg-custom-gray dark:text-gray-100">
	<div class="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-2">
			<!-- <img src="/play-60x60.png" alt="Logo" class="" /> -->
			<SvgLogo />
		</a>
		<ul class="items-stretch hidden space-x-3 md:flex">
			<li class="flex">
				<a rel="prefetch" href="/" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
			</li>
			<li class="flex">
				<a rel="prefetch" href="/terms-of-use" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Terms of Use</a>
			</li>
		<button class="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>