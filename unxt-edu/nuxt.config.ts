// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      titleTemplate:"%s - CY",
      title:'帝莎编程',
      charset:'utf-8',
      htmlAttrs:{
        lang:"zh-cn"
      },
      meta:[
        {name:'description',content:"帝莎编程描述"},
        {name:'keywords',content:'帝莎编程关键词'}
      ],
      script:[
        // {src:"http://xxx.js"}
      ],
      link:[
        // {rel:"stylesheet",href:"http://xxx.css"}
      ]
    }
  },
  css:[
    "@/assets/main.css"
  ],
  modules: [
    'nuxt-windicss',
  ], 
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  },
  imports:{
    dirs:["apis"]
  }
})
