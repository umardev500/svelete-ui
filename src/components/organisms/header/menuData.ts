import type { Menu } from '@typed/menu';

export const leftMenuData: Menu[] = [
	{ id: 1, title: 'Golang', slug: 'golang' },
	{ id: 2, title: 'React', slug: 'react' },
	{ id: 3, title: 'Tailwind', slug: 'tailwind' },
	{ id: 4, title: 'Bootstrap', slug: 'bootstrap' }
];

export const rightMenuData: Menu[] = [
	{
		id: 1,
		title: 'Versions',
		slug: undefined,
		submenu: [
			{ id: 1, title: 'v1.0.0', slug: 'v1.0.0' },
			{ id: 2, title: 'v2.0.0', slug: 'v2.0.0' }
		]
	}
];
