<script>
  import User from './User.svelte';
  import FilterUser from './FilterUser.svelte';
  import NewUser from './NewUser.svelte';
  import { users, remove, add } from '../store';

  $: filteredUsers = $users;
  // $ reactive variable

  const filter = (e) => {
    console.log(e.detail);
    if (e.detail === 'null') {
      filteredUsers = $users;
      return;
    }
    const status = e.detail === 'true';
    filteredUsers = $users.filter((user) => {
      return user.active === status;
    });
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="flex justify-between mx-4 items-center">
    <FilterUser on:filter={filter} />

    <NewUser on:newUser={add} />
  </div>

  {#each filteredUsers as user, i (user.id)}
    <User on:remove={remove} {user} {i} />
  {:else}
    <p>No User Found!</p>
  {/each}
</div>

<style>
</style>
