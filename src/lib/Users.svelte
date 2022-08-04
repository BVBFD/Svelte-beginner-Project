<script>
  import User from './User.svelte';
  import FilterUser from './FilterUser.svelte';

  let users = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786297.png',
      name: 'lsevina126',
      email: 'lsevina126@gmail.com',
      active: false,
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786282.png',
      name: 'Hacker',
      email: 'Hcker@gmail.com',
      active: true,
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/128/4786/4786318.png',
      name: 'Banker',
      email: 'Banker@gmail.com',
      active: false,
    },
  ];

  let filteredUsers = users;

  const filter = (e) => {
    if (e.detail === 'null') {
      filteredUsers = users;
      return;
    }
    const status = e.detail === 'true';
    filteredUsers = users.filter((user) => {
      return user.active === status;
    });
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <FilterUser on:filter={filter} />

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} />
  {:else}
    <p>No User Found!</p>
  {/each}
</div>

<style>
</style>
