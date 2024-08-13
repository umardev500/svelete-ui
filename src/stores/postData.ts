import type { Menu } from '@typed/menu';
import { writable } from 'svelte/store';

export const postStore = writable<Menu[]>([]);
