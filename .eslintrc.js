module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:prettier/recommended',
        'plugin:react/recommended'
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
        'prettier/prettier': 2,
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
        'jsx-tag-spacing': {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never',
            'beforeClosing': 'allow'
        },
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'jsx-wrap-multilines': 2

    }
}
