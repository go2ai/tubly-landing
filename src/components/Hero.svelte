<script lang="ts">
	import { onMount } from 'svelte';
  import { concurrent } from 'svelte-typewriter'
	
	let showText = true

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
			<h2 class="text-2xl font-semibold mb-4">Effortlessly Digest YouTube Content with AI-Driven Summaries and Audio Playback on Android</h2>
				<p class="mb-4">Introducing Tubly, your ultimate Android application for intelligent video summarization and audible insights. 
					Powered by cutting-edge AI algorithms, Tubly not only transforms extensive YouTube videos into crisp, reader-friendly overviews 
					but also allows you to listen to these summaries, thanks to its innovative audio feature. 
					Now, whether you're hitting the gym or commuting, you can effortlessly catch up on your favorite content without missing a beat.
				</p>

				<p class="mb-4">Beyond static text, Tubly provides a rich array of summary styles—from straightforward bullet points to comprehensive 
					narratives—all designed to meet your unique consumption needs. Engage your senses as you listen to summaries that align with your learning style and life pace.
				</p>

				<p class="mb-4">Elevate your video interaction to unparalleled heights with Tubly. Immerse yourself in a wellspring of knowledge, 
					supercharge your productivity, and harvest invaluable insights—visually or audibly—with absolute ease. 
					Install Tubly today to unlock a multifaceted approach to streamlined video intelligence!
				</p>
		</div>
		<div class="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
			<div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<div class="mockup-phone border-primary">
					<div class="camera"></div> 
					<div class="display">
						<div class="artboard artboard-demo phone-1">
							<h1 class="text-4xl font-bold leadi sm:text-5xl text-center">
								Unlock
								<span class="dark:text-violet-400">Youtube</span> 
								summaries
							</h1>
							{#if showText}
								<p use:concurrent={{ interval: [60, 65, 45, 35] }} class="px-8 mt-8 mb-12 text-lg h-[3em]">
									Watch less, learn more. Youtube videos summariazed with the power of AI!
								</p>
							{/if}
							<div class="flex flex-wrap justify-center">
								<button id="scrollToCTA" class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-primary">Get started</button>
								<button class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>




