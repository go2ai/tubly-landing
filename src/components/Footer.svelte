<script lang="ts">
	import { SvgLogo } from 'components'
</script>

<footer class="px-4 py-8 dark:bg-custom-gray dark:text-gray-400">
	<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
				<SvgLogo />
			</div>
			<ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="prefetch" href="/">Home</a>
				</li>
				<li>
					<a rel="prefetch" href="/terms-of-use">Terms of Use</a>
				</li>
			</ul>
		</div>
		<ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>