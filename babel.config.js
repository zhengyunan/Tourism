module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "import", [
      {
        "libraryName": "we-vue",
        "style": "style.css"
      }
    ]
  ]
]
}
