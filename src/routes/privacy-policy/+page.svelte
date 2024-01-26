<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>
		{$_('page.privacyPolicy.title')}
	</title>
</svelte:head>

<div class="container mx-auto px-4 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
	<article class="prose dark:prose-invert xs:prose-sm sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl">
		<h1>{$_('page.privacyPolicy.title')}</h1>

		<!-- Introduction -->
		<p>{$_('page.privacyPolicy.introduction')}</p>

		<!-- Information Collection and Use -->
		<h2>{$_('page.privacyPolicy.infoCollection.title')}</h2>
		<p>{$_('page.privacyPolicy.infoCollection.description')}</p>

		<!-- Data Storage and Security -->
		<h2>{$_('page.privacyPolicy.dataStorage.title')}</h2>
		<p>{$_('page.privacyPolicy.dataStorage.description')}</p>

		<!-- Data Sharing and Disclosure -->
		<h2>{$_('page.privacyPolicy.dataSharing.title')}</h2>
		<p>{$_('page.privacyPolicy.dataSharing.description')}</p>

		<!-- User Rights and Choices -->
		<h2>{$_('page.privacyPolicy.userRights.title')}</h2>
		<p>{$_('page.privacyPolicy.userRights.description')}</p>

		<!-- Cookies and Tracking Technologies -->
		<h2>{$_('page.privacyPolicy.cookies.title')}</h2>
		<p>{$_('page.privacyPolicy.cookies.description')}</p>

		<!-- Children's Privacy -->
		<h2>{$_('page.privacyPolicy.childrenPrivacy.title')}</h2>
		<p>{$_('page.privacyPolicy.childrenPrivacy.description')}</p>

		<!-- International Data Transfers -->
		<h2>{$_('page.privacyPolicy.internationalTransfers.title')}</h2>
		<p>{$_('page.privacyPolicy.internationalTransfers.description')}</p>

		<!-- Changes to the Privacy Policy -->
		<h2>{$_('page.privacyPolicy.policyChanges.title')}</h2>
		<p>{$_('page.privacyPolicy.policyChanges.description')}</p>

		<!-- Contact Information -->
		<h2>{$_('page.privacyPolicy.contactInfo.title')}</h2>
		<p>{$_('page.privacyPolicy.contactInfo.description')}</p>

		<!-- Governing Law and Jurisdiction -->
		<h2>{$_('page.privacyPolicy.governingLaw.title')}</h2>
		<p>{$_('page.privacyPolicy.governingLaw.description')}</p>

		<!-- Compliance with Laws -->
		<h2>{$_('page.privacyPolicy.complianceWithLaws.title')}</h2>
		<p>{$_('page.privacyPolicy.complianceWithLaws.description')}</p>
	</article>
</div>