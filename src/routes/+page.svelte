<script lang="ts">
  import { onMount } from 'svelte'
	import { CTA, Hero, Testemonials, Pricing, FAQ, Image } from 'components'
	// import { browser } from '$app/environment'

	onMount(() => {
		// if (browser) {
		// 	(document as any).lazyloadInstance.update()
		// }
		const button = document.getElementById('scrollToCTA')
    const target = document.getElementById('CTA')

		if(button) {
    	button.addEventListener('click', () => {
				if (target) target.scrollIntoView({ behavior: 'smooth' })
    	})
		}
	})
	// // import meta from '/bg-hatman.png?w=768&metadata'
	// // import srcsetJpeg from '/bg-hatman.png?w=1536;1280;768;640&jpeg&srcset'
	// // import srcsetWebp from '/bg-hatman.png?w=1536;1280;768;640&webp&srcset'

	// import srcSetPng from '/bg-hatman.png'
	// export let imageData


	// const { width, height, src } = meta
	// const sources = [
	// 	{ srcset: srcsetWebp, type: 'image/webp' },
	// 	{ srcset: srcsetJpeg, type: 'image/jpeg' },
	// ]

  // const sources = [
  //   { srcset: srcSetPng, type: 'image/png' },
  // ]

  // const meta = {
  //   width: 1800,
  //   height: 900,
  //   src: srcSetPng,
  // }

  // const alt = 'Hatman'
  // const placeholder = '/bg-hatman.png?w=32&blur=32&metadata'

  // const { width, height, src } = meta

	// const sizes = '(max-width: 672px) calc(100vw - 32px), 672px'
</script>
<!-- 
<style>
	.image-container img {
		position: relative;
		z-index: 1;
		box-shadow: 0 0 50px 50px #23262A inset;
		border: 10px solid #23262A;
	}
</style>

<div class="image-container relative w-full h-full flex justify-center items-center" style="background-color: #23262A;">
  <img
    src="/bg-hatman.png?w=1536&webp"
    alt="Hatman"
    loading="lazy"
    decoding="async"
    class="lazy relative"
    style="max-width: 1800px; max-height: 900px; z-index: 1;"
  />
</div>


 -->


<Hero />

<FAQ />

<Testemonials />

<div id="CTA">
	<CTA />
</div>

<Pricing />