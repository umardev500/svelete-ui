import { leftMenuData } from '@components/organisms/header/menuData';

export function load() {
	const data = {
		categories: [...leftMenuData]
	};
	return {
		...data
	};
}
