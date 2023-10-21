import 'i18n/i18n' // Import to initialize. Important :)
import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}