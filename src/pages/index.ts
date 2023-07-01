
interface RouteInterface {
	name: string,
	title: string,
}

export const RoutesDataMap: Record<string, RouteInterface> = {
	records: {
		name: 'records',
		title: 'Записи',
	},
	recordsEdit: {
		name: 'records-edit',
		title: 'Редактирование записей',
	},
}

export const routes = [
	{
		path: '/',
		name: RoutesDataMap.records.name,
		component: () => import("@/pages/records"),
	},
	{
		path: '/records/edit/:id',
		name: RoutesDataMap.recordsEdit.name,
		component: () => import("@/pages/records-edit"),
	},
]

