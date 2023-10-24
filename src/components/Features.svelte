<script lang="ts">
	import { _ } from 'svelte-i18n'	
</script>

<div class="dark:bg-gray-800 dark:text-gray-100">
	<div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<span class="text-xs font-semibold tracki uppercase dark:text-violet-400">{$_('page.components.features.title')}</span>
			<h2 class="text-3xl font-extrabold sm:text-4xl">{$_('page.components.features.subtitle')}</h2>
			<p class="mt-4 text-lg dark:text-gray-400">
				{$_('page.components.features.description')}
			</p>
		</div>
		<dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">
						{$_('page.components.features.feature_time.title')}
					</dt>
					<dd class="mt-2 dark:text-gray-400">
						{$_('page.components.features.feature_time.description')}
					</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">{$_('page.components.features.feature_openai.title')}</dt>
					<dd class="mt-2 dark:text-gray-400">
						{$_('page.components.features.feature_openai.description')}
					</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">
						{$_('page.components.features.feature_history.title')}
					</dt>
					<dd class="mt-2 dark:text-gray-400">
						{$_('page.components.features.feature_history.description')}</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">{$_('page.components.features.feature_audio.title')}</dt>
					<dd class="mt-2 dark:text-gray-400">
						{$_('page.components.features.feature_audio.description')}
					</dd>
				</div>
			</div>
			<!-- <div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">Proin dictum</dt>
					<dd class="mt-2 dark:text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">Quisque eu dui lacinia</dt>
					<dd class="mt-2 dark:text-gray-400">Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit est. Fusce venenatis diam fringilla metus convallis, at dapibus enim congue.</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">Cras vel bibendum tellus</dt>
					<dd class="mt-2 dark:text-gray-400">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
				</div>
			</div>
			<div class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div class="ml-3">
					<dt class="text-lg font-medium">Dignissim magna</dt>
					<dd class="mt-2 dark:text-gray-400">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
				</div>
			</div> -->
		</dl>
	</div>
</div>