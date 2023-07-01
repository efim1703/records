import { createRouter, createWebHistory, stringifyQuery } from "vue-router"
import { routes } from "@/pages"


export const router = createRouter({
	history: createWebHistory(),
	stringifyQuery: (query) => stringifyQuery(query),
	routes
})

