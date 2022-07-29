// basic svelte practice
import { writable } from 'svelte/store';

let count = writable(0);

count.subscribe((value) => console.log(value));

export { count };
// basic svelte practice
