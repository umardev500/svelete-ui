import type { Menu } from '@typed/menu';
import { writable } from 'svelte/store';

export const leftMenuStore = writable<Menu[]>([]);
export const rightMenuStore = writable<Menu[]>([]);
