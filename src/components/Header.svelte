<script lang="ts">
	import { SvgLogo, LocaleSwither } from 'components'
	import { _ } from 'svelte-i18n'
	
	let menuOpen = false
</script>

<svelte:head>
	<title>{$_('page.header.title')}</title>
	<meta name="description" content="{$_('page.header.description')}">
	<link rel="canonical" href="https://dev.tubly.app">
	<meta name="robots" content="index,follow">
	<!-- Open Graph -->
	<meta property="og:title" content="{$_('page.header.title')}">
	<meta property="og:description" content="{$_('page.header.description')}">
	<meta property="og:image" content="https://dev.tubly.app/play.png">
	<meta property="og:url" content="https://dev.tubly.app">
	<!-- Twitter Cards -->
	<meta name="twitter:title" content="{$_('page.header.title')}">
	<meta name="twitter:description" content="{$_('page.header.description')}">
	<meta name="twitter:image" content="https://dev.tubly.app/play.png">
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>

<header class="p-4 dark:bg-custom-gray dark:text-gray-100">
	<div class="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-2">
			<SvgLogo />
		</a>
		
		<!-- Conditionally display the menu based on menuOpen -->
		<ul class={menuOpen ? 'flex space-x-3' : 'hidden md:flex space-x-3'}>
			<li class="flex">
				<a rel="prefetch" href="/" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
					{$_('page.header.home')}
				</a>
			</li>
			<li class="flex">
				<a rel="prefetch" href="/terms-of-use" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
					{$_('page.header.terms')}
				</a>
			</li>
			<li class="flex">
				<LocaleSwither />
			</li>
		</ul>
		
		<!-- Button to toggle the menu -->
		<button on:click={() => menuOpen = !menuOpen} class="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>