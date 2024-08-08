type ReadPost = {
	category: string;
	parent: string;
	content: string;
	title: string;
	slug: string;
};

export function load({ params }) {
	// @Todo
	// do fetch post details

	const data: ReadPost = {
		category: params.category,
		parent: 'Getting Started',
		title: 'Installation',
		slug: 'installation',
		content: 'Hello World'
	};

	return data;
}
