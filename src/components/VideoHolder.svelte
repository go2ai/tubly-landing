<script lang="ts">
	import Youtube from './Youtube.svelte'
</script>



<div class="container mx-auto space-y-12">	
	<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
		
		<Youtube videoId="IMcl_Yhhi8I" />
		
		<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
			<span class="text-xs uppercase dark:text-gray-400">Join, it's free</span>
			<h3 class="text-3xl font-bold">We're not reinventing the wheel</h3>
			<p class="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			<button type="button" class="self-start">Action</button>
		</div>
	</div>
</div>