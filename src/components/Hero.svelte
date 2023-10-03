<script lang="ts">
	import { onMount } from 'svelte';
  import { concurrent } from 'svelte-typewriter';
	
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
      });
    });

    const heroElement = document.querySelector('.artboard-demo')
    
		if (heroElement) observer.observe(heroElement)

    return () => {
      // Cleanup
      observer.disconnect()
    }
  })
</script>

<section class="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<div class="mockup-phone border-primary">
			<div class="camera"></div> 
			<div class="display">
				<div class="artboard artboard-demo phone-1">
					<h1 class="text-4xl font-bold leadi sm:text-5xl">
						Unlock
						<span class="dark:dark:text-violet-400">Youtube</span> 
						summary
					</h1>
					{#if showText}
						<p use:concurrent={{ interval: [60, 65, 45, 35] }} class="px-8 mt-8 mb-12 text-lg h-[3em]">
							Watch less, learn more. Youtube videos summariazed with the power of AI!
						</p>
					{/if}
					<div class="flex flex-wrap justify-center">
						<button id="scrollToCTA" class="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary">Get started</button>
						<button class="px-8 py-3 m-2 text-lg border rounded dark:dark:text-gray-50 dark:dark:border-gray-700">Learn more</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>