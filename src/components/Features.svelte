<script lang="ts">
	import { _ } from 'svelte-i18n'
	import { Icon } from 'components'
	import { faClock, faBrain, faList, faHeadphones, faLanguage } from '@fortawesome/free-solid-svg-icons'

	const iconSize = '1.4x'
</script>

<div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto text-center py-6">
		<span class="text-xs font-semibold tracki uppercase dark:text-gray-300">{$_('page.components.features.title')}</span>
		<h2 class="text-3xl font-extrabold sm:text-4xl">{$_('page.components.features.subtitle')}</h2>
		<p class="mt-4 text-lg dark:text-gray-300">
			{$_('page.components.features.description')}
		</p>
	</div>
	
	<dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
		<div class="flex">
			<Icon icon={ faClock } size="{ iconSize }"/>

			<div class="ml-3">
				<dt class="text-lg font-medium dark:text-gray-300">
					{$_('page.components.features.feature_time.title')}
				</dt>
				<dd class="mt-2 dark:text-gray-200">
					{$_('page.components.features.feature_time.description')}
				</dd>
			</div>
		</div>
		<div class="flex">
			<Icon icon={ faLanguage } size="{ iconSize }"/>

			<div class="ml-3">
				<dt class="text-lg font-medium dark:text-gray-300">{$_('page.components.features.feature_translation.title')}</dt>
				<dd class="mt-2 dark:text-gray-200">
					{$_('page.components.features.feature_translation.description')}
				</dd>
			</div>
		</div>
		<div class="flex">
			<Icon icon={ faBrain } size="{ iconSize }"/>

			<div class="ml-3">
				<dt class="text-lg font-medium dark:text-gray-300">{$_('page.components.features.feature_openai.title')}</dt>
				<dd class="mt-2 dark:text-gray-200">
					{$_('page.components.features.feature_openai.description')}
				</dd>
			</div>
		</div>
		<div class="flex">
			<Icon icon={ faList } size="{ iconSize }"/>

			<div class="ml-3">
				<dt class="text-lg font-medium dark:text-gray-300">
					{$_('page.components.features.feature_history.title')}
				</dt>
				<dd class="mt-2 dark:text-gray-200">
					{$_('page.components.features.feature_history.description')}</dd>
			</div>
		</div>
		<div class="flex">
			<Icon icon={ faHeadphones } size="{ iconSize }"/>

			<div class="ml-3">
				<dt class="text-lg font-medium dark:text-gray-300">{$_('page.components.features.feature_audio.title')}</dt>
				<dd class="mt-2 dark:text-gray-200">
					{$_('page.components.features.feature_audio.description')}
				</dd>
			</div>
		</div>
	</dl>
</div>