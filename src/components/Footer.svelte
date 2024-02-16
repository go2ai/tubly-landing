<script lang="ts">
	import { SvgLogo } from 'components'
	import { _ } from 'svelte-i18n'
	import { Icon } from 'components'
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { routes } from 'services/Routing'
	import { page } from '$app/stores'
	import { iconSize } from 'utils/constants'
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
				<div class="uppercase dark:text-gray-50">{$_('page.components.footer.social')}</div>
				<div class="flex justify-start space-x-3">
					<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/TublyApp" title="Twitter" class="flex items-center p-1">
						<Icon icon={ faTwitter } size="{ iconSize }"/>		
					</a>
				</div>

				<div class="flex justify-start space-x-3">
					<a rel="noopener noreferrer" target="_blank" href="https://github.com/go2ai/tubly-landing" title="GitHub" class="flex items-center p-1">
						<Icon icon={ faGithub } size="{ iconSize }"/>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="py-6 text-sm text-center dark:text-gray-400">© 2024 Tubly App. {$_('page.components.footer.rights')}.</div>
</footer>