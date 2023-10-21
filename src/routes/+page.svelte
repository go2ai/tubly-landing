<script lang="ts">
  import { onMount } from 'svelte'
	import { CTA, Hero, Testemonials, Features } from 'components'

	onMount(() => {

		const button = document.getElementById('scrollToCTA')
    const target = document.getElementById('CTA')

		if(button) {
    	button.addEventListener('click', () => {
				if (target) target.scrollIntoView({ behavior: 'smooth' })
    	})
		}
	})
</script>


<Hero />

<!-- <FAQ /> -->

<Features />

<Testemonials />

<div id="CTA">
	<CTA />
</div>


<!-- <Pricing /> -->