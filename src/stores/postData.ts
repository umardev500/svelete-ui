import type { Post } from '@typed/post';
import { writable } from 'svelte/store';

export const postStore = writable<Post[]>([]);
