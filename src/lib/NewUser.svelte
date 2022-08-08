<script>
  import { createEventDispatcher } from 'svelte';
  import Modal from './Modal.svelte';

  let showModal = false;
  const dispatch = createEventDispatcher();

  let newUser = {};

  $: disableSubmitButton = !newUser.name || !newUser.email;

  const handleForm = () => {
    dispatch('newUser', newUser);
    showModal = false;
  };
</script>

<!-- show={showModal} -->
<div class="mt-4">
  <button
    on:click={() => (showModal = true)}
    class="px-4 py-1 bg-blue-800 text-white 
    rounded cursor-pointer">New User</button
  >

  {#if showModal}
    <Modal on:close={() => (showModal = false)} on:submit={handleForm}>
      <h1 class="text-2xl text-center">Create new user</h1>
      <div class="py-1 px-2 my-4">
        <label for="" class="w-10">Name</label>
        <input
          type="text"
          class="px-2 py-1 w-full rounded border"
          bind:value={newUser.name}
        />
      </div>

      <div class="py-1 px-2 my-4">
        <label for="" class="w-10">Email</label>
        <input
          type="email"
          class="px-2 py-1 w-full rounded border"
          bind:value={newUser.email}
        />
      </div>

      <div class="py-1 px-2 my-4">
        <label for="" class="w-10">Image</label>
        <input
          type="text"
          class="px-2 py-1 w-full rounded border"
          bind:value={newUser.image}
        />
      </div>

      <div class="py-1 px-2 my-4 flex justify-between">
        <label for="true">Active:</label>
        <div class="flex items-center">
          <label for="true">Yes</label>
          <input
            type="radio"
            value={true}
            id="true"
            name="active"
            class="px-2 py-1 mx-2"
            bind:group={newUser.active}
          />
          <label for="false">No</label>
          <input
            type="radio"
            value={false}
            id="false"
            name="active"
            class="px-2 py-1 mx-2"
            bind:group={newUser.active}
          />
        </div>
      </div>

      <button
        type="submit"
        id="submit-button"
        disabled={disableSubmitButton}
        slot="right-button"
        class="px-2 py-1 bg-blue-800 text-white rounded">Create</button
      >
    </Modal>
  {/if}
</div>
