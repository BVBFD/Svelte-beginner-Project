import { writable } from 'svelte/store';

export const users = writable([
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
    email: 'Hacker@gmail.com',
    active: true,
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/128/4786/4786318.png',
    name: 'Banker',
    email: 'Banker@gmail.com',
    active: false,
  },
]);

export const remove = ({ detail }) => {
  users.update((_users) => _users.filter((user) => user.id !== detail));
};

export const add = ({ detail }) => {
  users.update((_users) => [
    {
      id: _users.length + 1,
      image: '',
      ...detail,
    },
    ..._users,
  ]);
};
