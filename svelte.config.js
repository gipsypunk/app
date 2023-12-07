import path from 'path';
//import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static"; 
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
        adapter: adapter({
          pages: 'build',
          assets: 'build',
          fallback: 'index.html',
          precompress: true,
          strict: false
        }),

        paths: {
          base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        },

               



        
        alias: {
        $tag      : path.resolve('./src/lib/components/tags'),
        $component: path.resolve('./src/lib/components'),

        $section  : path.resolve('./src/lib/sections'),
        $store    : path.resolve('./src/lib/stores'),
        $tool     : path.resolve('./src/lib/tools'),
        $style    : path.resolve('./src/lib/styles'),
        $server   : path.resolve('./src/lib/server'),
        $lib      : path.resolve('./src/lib'),
        $src      : path.resolve('./src'),
        }
  },


  preprocess: vitePreprocess()
};
export default config;

