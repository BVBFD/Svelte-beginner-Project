<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { count } from '../store';

  //   basic svelte practice
  let ref;
  let refHi;
  let name = 'Input Value';
  //   let clicks = 0;
  const increaseClicks = () => {
    $count += 1;
  };

  onMount(() => {
    console.log(ref);
    console.log(refHi);
  });
  //   basic svelte practice
</script>

<div>
  <!-- basic svelte practice -->
  <div bind:this={ref}>
    <span bind:this={refHi}>Hi</span>
    <input type="text" bind:value={name} />

    {#if name === ''}
      <h2 transition:fade>What is your name?</h2>
    {:else}
      <h2>Hello {name} !</h2>
    {/if}

    <h2>Total Clicks: {$count}</h2>
    <button on:click|once={increaseClicks}>Click me!</button>
  </div>
  <!-- basic svelte practice -->
</div>

<style>
  /* basic svelte practice */
  button {
    border: 0;
    background: tomato;
    color: white;
    padding: 5px 20px;
    cursor: pointer;
  }

  button:active {
    opacity: 0.5;
  }
  /* basic svelte practice */
</style>
