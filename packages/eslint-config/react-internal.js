import antfu from '@antfu/eslint-config'

export const config = antfu(
  {
    stylistic: true,
    typescript: true,
    react: {
      overrides: {
        'style/jsx-self-closing-comp': [
          'error',
          {
            html: true,
          },
        ],
        'style/jsx-max-props-per-line': [
          'error',
          {
            maximum: {
              single: 2,
              multi: 1,
            },
          },
        ],
      },
    },
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
