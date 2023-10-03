<script lang="ts">
  import '../app.css'
  import { Header, Footer } from 'components'
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/environment'

  if (browser && !(document as any).lazyloadInstance) {
    (document as any).lazyloadInstance = new lazyload()
  }
</script>

<Header />

<slot />

<Footer />
