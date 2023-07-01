import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import DefineOptions from "unplugin-vue-define-options/vite"
import SvgLoader from 'vite-svg-loader'
import checker from 'vite-plugin-checker';

export default ( { mode }: { mode: string } ) => {
	process.env = {
		...process.env,
		...loadEnv( mode, process.cwd() )
	}

	return defineConfig( {
		define: {
			'process.env': process.env
		},
		base: process.env.NODE_ENV !== 'production' ? './' : '/',
		server: {
			host: true,
			port: 8000,
			proxy: {
				'/api': {
					target: process.env.VITE_PROXY_API_URL,
					changeOrigin: true,
					secure: false,
					ws: true,
					configure: ( proxy, options ) => {
						proxy.on( 'error', ( err, _req, _res ) => {
							console.log( 'proxy error', err );
						} );
						proxy.on( 'proxyReq', ( proxyReq, req, _res ) => {
							console.log( 'Sending Request to the Target:', req.method, req.url );
						} );
						proxy.on( 'proxyRes', ( proxyRes, req, _res ) => {
							console.log( 'Received Response from the Target:', proxyRes.statusCode, req.url );
						} );
					}
				},
				'/dev': {
					target: process.env.VITE_PROXY_API_URL,
					changeOrigin: true,
					secure: false,
					ws: true,
					configure: ( proxy, options ) => {
						proxy.on( 'error', ( err, _req, _res ) => {
							console.log( 'proxy error', err );
						} );
						proxy.on( 'proxyReq', ( proxyReq, req, _res ) => {
							console.log( 'Sending Request to the Target:', req.method, req.url );
						} );
						proxy.on( 'proxyRes', ( proxyRes, req, _res ) => {
							console.log( 'Received Response from the Target:', proxyRes.statusCode, req.url );
						} );
					}
				}
			},
		},
		plugins: [
			checker({
				typescript: true,
			}),
			DefineOptions(),
			VueMacros( {
				version: 3,
				plugins: {
					vue: Vue()
				},
				betterDefine: true
			} ),
			SvgLoader(),
		],
		resolve: {
			extensions: [ ".ts", ".tsx", ".js", ".vue" ],
			alias: {
				"@": fileURLToPath( new URL( './src', import.meta.url ) )
			}
		},
		build: {
			sourcemap: true,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/app/styles/base.scss" as *;' +
						'@use "@/app/styles/vars.scss" as *; ' +
						'@use "@/app/styles/global.scss" as *;'
				}
			}
		}
	} )
}
