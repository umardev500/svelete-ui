import type { Post } from '@typed/post';

export const posts: Post[] = [
	{
		title: 'Introduction',
		slug: 'introduction'
	},
	{
		title: 'Getting Started',
		slug: undefined,
		submenu: [
			{
				title: 'Installation',
				slug: 'installation'
			}
		]
	}
];
