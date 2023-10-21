<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
  let dropdownElement: HTMLDetailsElement

  function switchLocale(selectedLocale: string) {
    $locale = selectedLocale
    dropdownElement.removeAttribute('open')
  }
</script>

<details bind:this={dropdownElement} class="dropdown">
  <summary class="m-1 btn">{$locale}</summary>
  <ul class="p-2 shadow menu dropdown-content z-[12] bg-base-100 rounded-box w-15">
    {#each $locales as loc}
      <li>
        <a on:click={() => switchLocale(loc)}>{loc}</a>
      </li>
    {/each}
  </ul>
</details>