<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>
		{$_('page.terms.title')}
	</title>
</svelte:head>

<section class="bg-gray-800 text-gray-100">
	<div class="container mx-auto px-4 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
		<article class="prose dark:prose-invert xs:prose-sm sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl">
			<h1>{$_('page.terms.title')}</h1>
			<p>{$_('page.terms.welcome')}</p>

			<h2>{$_('page.terms.usageLimits.title')}</h2>
			<p>{$_('page.terms.usageLimits.description')}</p>

			<h2>{$_('page.terms.payments.title')}</h2>
			<p>{$_('page.terms.payments.description')}</p>

			<h2>{$_('page.terms.intellectualProperty.title')}</h2>
			<p>{$_('page.terms.intellectualProperty.description')}</p>

			<h2>{$_('page.terms.changes.title')}</h2>
			<p>{$_('page.terms.changes.description')}</p>

			<h2>{$_('page.terms.contact.title')}</h2>
			<p>{$_('page.terms.contact.description')}</p>

			<h2>{$_('page.terms.dataHandlingAndPrivacy.title')}</h2>
			<p>{$_('page.terms.dataHandlingAndPrivacy.description')}</p>

			<h2>{$_('page.terms.liabilityLimitation.title')}</h2>
			<p>{$_('page.terms.liabilityLimitation.description')}</p>

			<h2>{$_('page.terms.governingLawAndJurisdiction.title')}</h2>
			<p>{$_('page.terms.governingLawAndJurisdiction.description')}</p>

			<h2>{$_('page.terms.subscriptionCancellation.title')}</h2>
			<p>{$_('page.terms.subscriptionCancellation.description')}</p>

			<h2>{$_('page.terms.customerSupport.title')}</h2>
			<p>{$_('page.terms.customerSupport.description')}</p>

			<h2>{$_('page.terms.termination.title')}</h2>
			<p>{$_('page.terms.termination.description')}</p>
		</article>
	</div>
</section>