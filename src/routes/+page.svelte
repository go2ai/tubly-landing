<script lang="ts">
  import { onMount } from 'svelte'
	import { CTA, Hero, Features, Video } from 'components'

	onMount(() => {
		const scrollMap = [
			{ buttonId: 'scrollToCTA', targetId: 'CTA' },
			{ buttonId: 'scrollToFeatures', targetId: 'Features' }
		]

		scrollMap.forEach(item => {
			const button = document.getElementById(item.buttonId)
			const target = document.getElementById(item.targetId)

			if(button && target) {
				button.addEventListener('click', () => {
					target.scrollIntoView({ behavior: 'smooth' })
				})
			}
		})
	})
</script>


<Hero />

<!-- <Video videoId="IMcl_Yhhi8I" /> -->

<!-- <FAQ /> -->

<div id="CTA">
	<CTA />
</div>

<div id="Features">
	<Features />
</div>


<!-- <Testemonials /> -->
<!-- <Contact /> -->


<!-- <Pricing /> -->