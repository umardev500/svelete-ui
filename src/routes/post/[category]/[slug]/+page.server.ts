type ReadPost = {
	Category: string;
};

export function load({ params }) {
	// do fetch post details

	const data: ReadPost = {
		Category: params.category
	};

	return data;
}
