<script lang="ts">
	import { onMount } from 'svelte'
	import { _ } from 'svelte-i18n'
	import { Icon } from 'components'
	import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
	import { Links } from 'utils/helpers'

	let hoverGradient: HTMLElement
	let interval: ReturnType<typeof setInterval>

	function simulateHover() {
		hoverGradient.style.opacity = hoverGradient.style.opacity === '1' ? '0' : '1'
	}

	function startHover() {
		clearInterval(interval)
		hoverGradient.style.opacity = '1'
	}

	function endHover() {
		hoverGradient.style.opacity = '0'
		interval = setInterval(simulateHover, 3000)
	}

  onMount(() => {
		interval = setInterval(simulateHover, 3000)

		return () => {
				clearInterval(interval)
		}
	})

	function goToStore() {
		window.open(Links.googleStore, '_blank')
	}
</script>

<style>
  .custom-transition {
    transition: opacity 0.7s ease-in-out
  }
</style>

<div class="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
	<div class="flex flex-col justify-center lg:text-left">
		<p class="mb-1 text-sm font-medium tracki uppercase dark:text-gray-300">
			{$_('page.components.cta.title')}
		</p>
		<h1 class="py-2 text-3xl font-medium leadi title-font">
			{$_('page.components.cta.description')}
		</h1>
	</div>

	<div class="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
		<div class="shadow-xl">
			<button 
				on:click="{goToStore}"
				on:mouseenter="{startHover}"
				on:mouseleave="{endHover}"
				class="relative inline-flex items-center px-6 py-3 rounded-lg overflow-hidden shadow-xl"
			>
				<span class="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-700 to-amber-700"></span>
				<span bind:this={hoverGradient} class="absolute inset-0 bg-gradient-to-r from-amber-800 via-yellow-700 to-yellow-400 opacity-0 custom-transition"></span>
				<span class="relative z-10 flex items-center text-gray-900">
					<Icon icon={ faGooglePlay } size="1.8x"/>
					<span class="flex flex-col items-start ml-4 leading-none">
						<span class="mb-1 text-xs font-semibold">{$_('page.components.cta.button')}</span>
						<span class="title-font">Google Play</span>
					</span>
				</span>
			</button>
		</div>
	</div>

</div>