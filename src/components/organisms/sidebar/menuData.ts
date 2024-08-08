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
			},
			{
				title: 'Configuration',
				slug: 'configuration'
			},
			{
				title: 'Usage',
				slug: 'usage'
			},
			{
				title: 'FAQ',
				slug: 'faq'
			}
		]
	},
	{
		title: 'Guide',
		slug: undefined,
		submenu: [
			{
				title: 'Routing',
				slug: 'routing'
			},
			{
				title: 'Navigation',
				slug: 'navigation'
			},
			{
				title: 'State Management',
				slug: 'state-management'
			}
		]
	},
	{
		title: 'Contributing',
		slug: 'contributing'
	}
];
