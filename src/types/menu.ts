export type Menu = {
	id: number;
	title: string;
	slug: string;
	submenu?: Menu[];
};
