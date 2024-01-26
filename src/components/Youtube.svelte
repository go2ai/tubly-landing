<script context="module" lang="ts">
  import Youtube from 'svelte-youtube-embed'
  import { Icon } from 'components'
  import { faPlay } from '@fortawesome/free-solid-svg-icons'
</script>

<script lang="ts">
  export let videoId: string
</script>

<!-- custom play button -->
<div class="container flex flex-col-reverse mx-auto lg:flex-row">
  <Youtube id={videoId} --overlay-bg-color="hsla(0, 0%, 0%, 0.3)" --overlay-transition="all 100ms linear">
    <button>
      <Icon icon={faPlay} size="2x" />
    </button>
  </Youtube>
</div>
<!-- Alternative thumbnail if default thumbnail doesn't show automatically -->
<!-- <Youtube id="g50dm1OCV3w" altThumb={true} --title-color="#111111" --title-shadow-color="#cccccc" --title-font-family="Lato, sans-serif"  /> -->