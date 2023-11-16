<script lang="ts">
  import { onMount } from 'svelte'
	import { SvgLogo, LocaleSwither } from 'components'
	import { _, locale } from 'svelte-i18n'
	import { routes } from 'services/Routing'
	import { page } from '$app/stores'

  let drawerCheckbox: HTMLInputElement | null = null

  onMount(() => {
    drawerCheckbox = document.getElementById('my-drawer') as HTMLInputElement
    console.log('🚀 ~ file: Header.svelte:12 ~ onMount ~ drawerCheckbox:', drawerCheckbox)
  })

  $: if ($page.url.pathname || $locale) {
    if (drawerCheckbox && drawerCheckbox.checked) drawerCheckbox.checked = false
  }
</script>

<svelte:head>
	<title>{$_('page.header.title')}</title>
	<meta name="description" content="{$_('page.header.description')}">
	<link rel="canonical" href="https://dev.tubly.app">
	<meta name="robots" content="index,follow">
	<!-- Open Graph -->
	<meta property="og:title" content="{$_('page.header.title')}">
	<meta property="og:description" content="{$_('page.header.description')}">
	<meta property="og:image" content="https://dev.tubly.app/tubly.png">
	<meta property="og:url" content="https://dev.tubly.app">
	<!-- Twitter Cards -->
	<meta name="twitter:title" content="{$_('page.header.title')}">
	<meta name="twitter:description" content="{$_('page.header.description')}">
	<meta name="twitter:image" content="https://dev.tubly.app/tubly.png">
	<meta name="twitter:card" content="summary_large_image">

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-W6KQJD8G2X"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-W6KQJD8G2X');
	</script>
</svelte:head>

<header class="p-4 dark:bg-custom-gray dark:text-gray-100">
	<div class="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-2">
			<SvgLogo />
		</a>
		
		<!-- Conditionally display the menu based on menuOpen -->
		<ul class="items-stretch hidden space-x-3 md:flex">
			<li class="flex">
				<a rel="prefetch" href="{routes.home()}" class="{($page.route.id === routes.home()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}" >
					{$_('page.header.home')}
				</a>
			</li>
			<li class="flex">
				<a rel="prefetch" href="{routes.terms()}" class="{($page.route.id === routes.terms()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}">
					{$_('page.header.terms')}
				</a>
			</li>
			<li class="flex">
				<a rel="prefetch" href="{routes.privacy()}" class="{($page.route.id === routes.privacy()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}">
					{$_('page.header.privacy')}
				</a>
			</li>
			<li class="flex">
				<LocaleSwither />
			</li>
		</ul>

		<div class="drawer drawer-end flex justify-end p-2 md:hidden z-[12]">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label for="my-drawer" class="drawer-button btn btn-primary">Menu</label>
			</div> 
			<div class="drawer-side">
				<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					<li>
						<div>
							<span>{$_('page.header.language')}:</span>
							<LocaleSwither />
						</div>
					</li>
					<li>
						<a rel="prefetch" href="{routes.home()}" class="{($page.route.id === routes.home()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}" >
							{$_('page.header.home')}
						</a>
					</li>
					<li>
						<a rel="prefetch" href="{routes.terms()}" class="{($page.route.id === routes.terms()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}">
							{$_('page.header.terms')}
						</a>
					</li>
					<li>
						<a rel="prefetch" href="{routes.privacy()}" class="{($page.route.id === routes.privacy()) ? 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent underline' : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'}">
							{$_('page.header.privacy')}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</header>