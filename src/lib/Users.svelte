<script>
  import User from './User.svelte';
  import FilterUser from './FilterUser.svelte';
  import NewUser from './NewUser.svelte';
  import { users, remove, add } from '../store';
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut, quintInOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';

  $: filteredUsers = $users;
  // $ reactive variable

  onMount(() => {
    console.log(filteredUsers);
    console.log('onMount');
  });

  afterUpdate(() => {
    console.log(filteredUsers);
    console.log('afterUpdate');
  });

  beforeUpdate(() => {
    console.log(filteredUsers);
    console.log('beforeUpdate');
  });

  const filter = (e) => {
    if (e.detail === 'null') {
      filteredUsers = $users;
      return;
    }
    const status = e.detail === 'true';
    filteredUsers = $users.filter((user) => {
      return user.active === status;
    });
  };

  $: progress = tweened(filteredUsers.length, {
    duration: 1000,
    easing: cubicInOut,
  });
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="flex justify-between mx-4 items-center">
    <FilterUser on:filter={filter} />

    <NewUser on:newUser={add} />
  </div>

  <progress max="10" min="0" value={$progress} class="w-full mx-4" />

  {#each filteredUsers as user, i (user.id)}
    <div
      animate:flip={{
        delay: 250,
        duration: 800,
        easing: quintInOut,
      }}
    >
      <User on:remove={remove} {user} {i} />
    </div>
  {:else}
    <p>No User Found!</p>
  {/each}
</div>

<style>
</style>
