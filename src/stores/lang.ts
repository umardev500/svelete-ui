import { rightMenuData } from '@components/organisms/header/menuData';
import { writable } from 'svelte/store';

export const langStore = writable<string>(rightMenuData?.[1]?.submenu?.[0]?.title);
