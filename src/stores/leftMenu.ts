import type { CategoryMenu } from '@typed/category';
import { writable } from 'svelte/store';

export const leftMenuStore = writable<CategoryMenu[]>([]);
