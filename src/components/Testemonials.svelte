<script lang="ts">
  import { onMount } from 'svelte'

  let instance: string = 'Testemonials'

  onMount(() => {
      console.log(instance)
  })
</script>

<section class="p-6 dark:bg-custom-gray">
	<div class="container max-w-xl mx-auto">
		<div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
			<img src="https://source.unsplash.com/random/100x100?4" alt="" class="w-20 h-20 rounded-full dark:bg-gray-500">
			<blockquote class="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
			<div class="text-center dark:text-gray-400">
				<p>Leroy Jenkins</p>
				<p>CEO of Company Co.</p>
			</div>
			<div class="flex space-x-2">
				<button type="button" aria-label="Page 1" class="w-2 h-2 rounded-full dark:bg-gray-50"></button>
				<button type="button" aria-label="Page 2" class="w-2 h-2 rounded-full dark:bg-gray-600"></button>
				<button type="button" aria-label="Page 3" class="w-2 h-2 rounded-full dark:bg-gray-600"></button>
				<button type="button" aria-label="Page 4" class="w-2 h-2 rounded-full dark:bg-gray-600"></button>
			</div>
		</div>
	</div>
</section>