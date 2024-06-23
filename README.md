# Bookshelf

To run locally

- [install pnpm](https://pnpm.io/installation) if it does not exist
- install deps by `pnpm i` command
- run `pnpm dev` command in terminal
- open `http://localhost:8080/` in your browser

## Project structure

- `index.tsx` is the entry point of app, `index.css` is the global styles
- `pages` folder for react pages components, use them inside [router](https://reactrouter.com/en/main) in `index.tsx`
- `components` folder for reused components

Within components you can use css modules, for this ending of css file should be `.module.css`

For see all books open `http://localhost:8080/books`.

For run storybook use: `pnpm storybook`.
