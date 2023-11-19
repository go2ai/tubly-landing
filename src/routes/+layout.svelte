<script lang="ts">
  import '../app.css'
  import { Header, Footer } from 'components'
</script>

<Header />
<section class="bg-gradient-to-b from-custom-gray via-custom-purple to-custom-gray dark:text-gray-100">
  <slot />
</section>
<Footer />
