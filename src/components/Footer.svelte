<script lang="ts">
	import { SvgLogo } from 'components'
	import { _ } from 'svelte-i18n'
	import { routes } from 'services/Routing'
	import { page } from '$app/stores'
</script>

<footer class="px-4 divide-y dark:bg-custom-gray dark:text-gray-100">
	<div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div class="lg:w-1/3">
			<a rel="noopener noreferrer" href="{routes.home()}" class="flex justify-center space-x-3 lg:justify-start">
				<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
					<SvgLogo />
				</div>
				<span class="self-center text-2xl font-bold bg-gradient-to-br from-custom-blue to-white-500 bg-clip-text text-transparent box-decoration-clone">
					Tubly
				</span>
			</a>
		</div>
		<div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div class="space-y-3">
				<h3 class="tracki uppercase dark:text-gray-50">Tubly</h3>
				<ul class="space-y-1">
					<li>
						<a rel="prefetch" href="{routes.home()}" class="{($page.route.id === routes.home()) ? 'underline' : ''}">
							{$_('page.components.footer.home')}
						</a>
					</li>
					<li>
						<a rel="prefetch"  href="{routes.terms()}" class="{($page.route.id === routes.terms()) ? 'underline' : ''}">
							{$_('page.components.footer.terms')}
						</a>
					</li>
					<li>
						<a rel="prefetch" href="{routes.privacy()}" class="{($page.route.id === routes.privacy()) ? 'underline' : ''}">
							{$_('page.components.footer.privacy')}
						</a>
					</li>
				</ul>
			</div>
			
			<div class="space-y-3">
				<div class="uppercase dark:text-gray-50">Social media</div>
				<div class="flex justify-start space-x-3">
					<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/TublyApp" title="Twitter" class="flex items-center p-1">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="py-6 text-sm text-center dark:text-gray-400">© 2023 Tubly App. All rights reserved.</div>
</footer>