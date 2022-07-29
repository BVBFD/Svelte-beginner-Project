<script>
  //   import { onMount } from 'svelte';
  //   import { fade } from 'svelte/transition';
  //   import { count } from '../store';

  let users = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786297.png',
      name: 'lsevina126',
      email: 'lsevina126@gmail.com',
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786282.png',
      name: 'Hacker',
      email: 'Hcker@gmail.com',
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786318.png',
      name: 'Banker',
      email: 'Banker@gmail.com',
    },
  ];

  // basic svelte practice
  //   let ref;
  //   let refHi;
  //   let name = 'Input Value';
  //   //   let clicks = 0;
  //   const increaseClicks = () => {
  //     $count += 1;
  //   };

  //   onMount(() => {
  //     console.log(ref);
  //     console.log(refHi);
  //   });
  // basic svelte practice

  const getUsers = () => {
    return users;
  };
</script>

<div>
  <h1>List of Users</h1>
  {#each getUsers() as { image, name, email, id }, i (id)}
    <div>
      <p>{i + 1}</p>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  {:else}
    <p>No User Found!</p>
  {/each}

  <!-- basic svelte practice -->
  <!-- <div bind:this={ref}>
    <span bind:this={refHi}>Hi</span>
    <input type="text" bind:value={name} />

    {#if name === ''}
      <h2 transition:fade>What is your name?</h2>
    {:else}
      <h2>Hello {name} !</h2>
    {/if}

    <h2>Total Clicks: {$count}</h2>
    <button on:click|once={increaseClicks}>Click me!</button>
  </div> -->
  <!-- basic svelte practice -->
</div>

<style>
  /* basic svelte practice */
  /* button {
    border: 0;
    background: tomato;
    color: white;
    padding: 5px 20px;
    cursor: pointer;
  }

  button:active {
    opacity: 0.5;
  } */
  /* basic svelte practice */
</style>
