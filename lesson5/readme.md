# Lesson 3. JavaScript Coding Standards

This document describes JavaScript coding standards based on ESLint rules and common language constructs for `if/else`, `switch`, and operators.

## ESLint and Style Rules

- Use ESLint recommended rules as a base.
- Always use semicolons.
- Indent with 4 spaces.
- Limit line length to 140 characters.
- Do not use trailing spaces.
- Ensure a newline at the end of every file.
- Avoid `var`; use `const` when values do not change.
- One variable declaration per line.
- Use single quotes for strings.
- Use kebab-case file names.
- Use consistent spacing around keywords and operators.

### Key ESLint rules

- `semi: ['error', 'always']`
- `indent: ['error', 4, { SwitchCase: 1 }]`
- `max-len: ['warn', { code: 140, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }]`
- `brace-style: ['warn']`
- `comma-dangle: ['error', 'never']`
- `no-multiple-empty-lines: ['error', { max: 2 }]`
- `no-trailing-spaces: ['error', { skipBlankLines: false }]`
- `eol-last: ['error', 'always']`
- `no-var: ['error']`
- `prefer-const: 'error'`
- `one-var-declaration-per-line: ['error', 'initializations']`
- `keyword-spacing: ['error', { before: true, after: true }]`
- `comma-spacing: ['error', { before: false, after: true }]`
- `@stylistic/space-infix-ops: 'error'`
- `@stylistic/quotes: ['warn', 'single']`
- `@stylistic/space-before-blocks: ['error', 'always']`
- `@stylistic/arrow-spacing: 'error'`
- `@stylistic/comma-spacing: ['error', { before: false, after: true }]`
- `@stylistic/keyword-spacing: ['error', { before: true, after: true }]`
- `unicorn/filename-case: ['error', { case: 'kebabCase' }]`

## JavaScript Control Flow

### `if / else`

- Use `if` for conditional execution.
- Always include braces for blocks, even for single statements.
- Prefer `else if` instead of nested `if` blocks when testing multiple conditions.

Example:

```js
if (condition) {
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}
```

### `switch`

- Use `switch` for handling multiple discrete values.
- Always include a `default` case.
- Use `break` to prevent accidental fall-through unless it is intentional.

Example:

```js
switch (value) {
    case 'one':
        // code
        break;
    case 'two':
        // code
        break;
    default:
    // code
}
```

### Operators

- Use `===` and `!==` for comparisons.
- Use arithmetic operators (`+`, `-`, `*`, `/`, `%`) consistently.
- Use logical operators (`&&`, `||`, `!`) for boolean logic.
- Avoid assignment inside conditionals, unless the intent is clear.
- Use unary operators only when they improve readability.
