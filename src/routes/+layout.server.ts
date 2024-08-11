import { leftMenuData, rightMenuData } from '@components/organisms/header/menuData';

export function load() {
	const data = {
		categories: [...leftMenuData],
		righMenus: [...rightMenuData]
	};
	return {
		...data
	};
}
