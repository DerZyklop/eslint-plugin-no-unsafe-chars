# eslint-plugin-no-unsafe-chars

> An eslint plugin that disallows german umlauts and other unsafe characters in function names, variable names and object property names.

## Usage

1. Install `eslint-plugin-no-unsafe-chars` as a dev-dependency:

  ```sh
  $ npm install --save-dev eslint-plugin-no-unsafe-chars
  ```

2. Enable the plugin by adding it to your .eslintrc:

  ```json
  plugins: [
    "no-unsafe-chars"
  ]
  ```

## Configuration

You can disallow german umlauts (ä, ö and ü) like this: 

```json
rules: {
    "no-unsafe-chars/no-umlauts": [2]
}
```

You can disallow more chars with the custom rule. By default the disallowed custom char is the german `ß`. You can adjust the disallowed chars to your needs by setting the `disallow` option in your .eslintrc:

```json
rules: {
    "no-unsafe-chars/custom": [2, {"disallow": 'ß', '_', '-', 'é', 'à', 'ï'}]
}
```

As standard in eslint, set that first element to 1 to make this a warning instead of an error.

```json
rules: {
    "no-unsafe-chars/no-umlauts": [1]
}
```

## License

MIT © [Nils Neumann](http://der-zyklop.de/)
