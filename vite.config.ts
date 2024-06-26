import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      // MOCK 服务
      env.VITE_MOCK_DEV_SERVER === 'true' ? mockDevServerPlugin() : null,
      // 自动导入函数
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          'vue',
          '@vueuse/core',
          'pinia',
          'vue-router',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
        dirs: [],
        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
        dts: './src/types/auto-imports.d.ts',
      }),
      // 自动导入组件
      Components({
        resolvers: [
          // 自动导入 组件
          NaiveUiResolver(),
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ['src/components', 'src/**/components'],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: './src/types/components.d.ts',
      }),
    ],
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
