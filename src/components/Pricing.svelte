<script lang="ts">
  import { onMount } from 'svelte'
	import { Links } from 'utils/helpers'

  let instance: string = 'Pricing'

  onMount(() => {
      console.log(instance)
  })
</script>

<section class="py-20 dark:bg-gray-800 dark:text-gray-100">
	<div class="container px-4 mx-auto">
		<div class="max-w-2xl mx-auto mb-16 text-center">
			<span class="font-bold tracki uppercase dark:text-violet-400">Pricing</span>
			<h2 class="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
		</div>
		<div class="flex flex-wrap items-stretch justify-center -mx-4">
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Beginner</h4>
						<span class="text-6xl font-bold">Free</span>
					</div>
					<p class="mt-3 leadi dark:text-gray-400">Try it out.</p>
					<ul class="flex-1 mb-6 dark:text-gray-400">
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Three movies per day</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Limit of 20 minutes movies</span>
						</li>
						<li class="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>No audio summarization</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="{Links.googleStore}" class="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-primary">
						Get Started
					</a>
				</div>
			</div>
			<div class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-primary">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Pro</h4>
						<span class="text-6xl font-bold">$9.90
							<span class="text-sm tracki">/month</span>
						</span>
					</div>
					<p class="leadi">For the best</p>
					<ul class="flex-1 space-y-2">
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Unlimited number of videos</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Audio summarizations</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Unlimited number of videos</span>
						</li>
						<li class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Follow channels and get notified of new summaries</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="{Links.googleStore}" class="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-gray-800 dark:text-violet-400">Get Started</a>
				</div>
			</div>
			<!-- <div class="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div class="p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div class="space-y-2">
						<h4 class="text-2xl font-bold">Team</h4>
						<span class="text-6xl font-bold">$72
							<span class="text-sm tracki">/month</span>
						</span>
					</div>
					<p class="leadi dark:text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul class="space-y-2 dark:text-gray-400">
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Everything in Pro</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li class="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" class="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-primary dark:text-gray-900">Get Started</a>
				</div>
			</div> -->
		</div>
	</div>
</section>