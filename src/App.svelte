<script>
  import Users from './lib/Users.svelte';
  import { Router, Route, Link } from 'svelte-navigator';
  import HomePage from './page/HomePage.svelte';
  import UserPage from './page/UserPage.svelte';
  import { users } from './store';
  import { afterUpdate } from 'svelte';

  afterUpdate(() => {
    console.log($users);
  });
</script>

<Router>
  <nav class="p-4 bg-blue-800 text-white">
    <Link class="mx-4 cursor-pointer hover:underline" to="/">Home</Link>
    <Link class="mx-4 cursor-pointer hover:underline" to="/users">Users</Link>
  </nav>

  <Route path="/">
    <HomePage />
  </Route>

  <Route path="/users">
    <UserPage />
  </Route>
</Router>
