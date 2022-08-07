<script>
  import { createEventDispatcher } from 'svelte';

  export let user;
  export let i;

  const dispatch = createEventDispatcher();

  const remove = () => {
    alert('removing');
    dispatch('remove', user.id);
  };
</script>

<div
  class="flex m-5 bg-white border p-2 rounded-lg 
  shadow-md hover:shadow-lg cursor-pointer 
  items-center relative"
>
  <button
    on:click={remove}
    class="absolute right-0 top-0 -mt-3 rounded-full 
    w-5 h-5 bg-red-300 text-white text-sm 
    text-center hover:bg-red-700">X</button
  >
  <p class="w-10">{i + 1}</p>
  <img class="rounded-full w-14 h-14" src={user.image} alt={user.name} />
  <p class="mx-4 w-20">{user.name}</p>
  <p class="mx-4 2-20">{user.email}</p>
</div>

<style></style>
