module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        /* Uncomment the rules set you prefer from the list below */

        'plugin:prettier/recommended'
        // 'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier'
    ],
    'rules': {
        //Prettier
        'prettier/prettier': 2,

        //EsLint Rules
        'prefer-const': 2,

        //React Rules
        'react/button-has-type': 2,
        'react/destructuring-assignment': 2,
        'react/forbid-component-props': 2,
        'react/no-access-state-in-setstate': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-typos': 2,
        'react/no-this-in-sfc': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-stateless-function': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': [2, {
            order: [
                'constructor',
                'everything-else',
                'lifecycle',
                'render'
            ]
        }],
        'react/state-in-constructor': [2, 'never'],
        'react/void-dom-elements-no-children': 2,

        //JSX Rules
        'react/jsx-boolean-value': 2,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-newline': {
            multiline: 'consistent'
            singleline: 'consistent'
        },
        'react/jsx-curly-spacing': {'when': 'never'},
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'handle',
            'eventHandlerPropPrefix': 'on'
        }]
        'react/jsx-indent': 2,
        'react/jsx-no-bind': 2,
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 2,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-curly-brace-presence': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-props-no-multi-spaces': 2,
        'react/jsx-tag-spacing': {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never',
            'beforeClosing': 'allow'
        },
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,


        // Optional: Uncomment only if you think you need them
        // 'react/require-optimization': 2,
        // 'react/react-in-jsx-scope': 0,
        // 'no-var': 2,
    }
}
