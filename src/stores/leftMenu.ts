import type { Menu } from '@typed/category';
import { writable } from 'svelte/store';

export const leftMenuStore = writable<Menu[]>([]);
