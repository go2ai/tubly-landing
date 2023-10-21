<script lang="ts">
	import { onMount } from 'svelte';
  import { concurrent } from 'svelte-typewriter'
	import { _, locale  } from 'svelte-i18n'
	
	let showText = true
	let currentLocale: string | null | undefined = null 
  $: {
		currentLocale = $locale
		showText = false
		
		setTimeout(() => {
			showText = true
		}, 0)
	}

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Toggle to hide and then show the text, restarting the typewriter effect
          showText = false
          setTimeout(() => {
            showText = true
          }, 0)
        }
      })
    })

    const heroElement = document.querySelector('.artboard-demo')
    
		if (heroElement) observer.observe(heroElement)

    return () => {
      // Cleanup
      observer.disconnect()
    }
  })
</script>

<style>
	.artboard-demo {
		background-color: #15191E;
		color: #A6ADBA;
	}
	
</style>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col-reverse mx-auto lg:flex-row">

		<div class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:text-gray-100 text-center">
			<h2 class="text-2xl font-semibold mb-4">{$_('page.components.hero.title')}</h2>
			<p class="mb-4">{$_('page.components.hero.paragraph_1')}</p>
			<p class="mb-4">{$_('page.components.hero.paragraph_2')}</p>
			<p class="mb-4">{$_('page.components.hero.paragraph_3')}</p>
		</div>

		<div class="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
			<div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<div class="mockup-phone border-primary">
					<div class="camera"></div> 
					<div class="display">
						<div class="artboard artboard-demo phone-1">
							<h1 class="text-4xl font-bold leadi sm:text-5xl text-center">
								{$_('page.components.hero.phone_title_1')}
								<span class="dark:text-violet-400">{$_('page.components.hero.phone_title_2')}</span> 
								{$_('page.components.hero.phone_title_3')}
							</h1>
							{#if showText}
								<p use:concurrent={{ interval: [60, 65, 45, 35] }} class="px-8 mt-8 mb-12 text-lg h-[3em]">
									{$_('page.components.hero.phone_description')}
								</p>
							{/if}
							<div class="flex flex-wrap justify-center">
								<button id="scrollToCTA" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-primary">
									{$_('page.components.hero.phone_button_1')}
								</button>
								<button id="scrollToFeatures"class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
									{$_('page.components.hero.phone_button_2')}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>




