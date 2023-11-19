<script lang="ts">
  import Fa from 'svelte-fa'
  import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'

  export let icon: IconDefinition | null = null
  export let size: string = '2x'
</script>
  
<Fa icon={icon} size={size} {...$$props} />