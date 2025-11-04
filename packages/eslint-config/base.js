import antfu from '@antfu/eslint-config'

export const config = antfu(
  {
    stylistic: true,
    typescript: true,
    formatters: {
      css: true,
      html: true,
    },
    ignores: [
      'dist',
      'node_modules',
    ],
  },
)
