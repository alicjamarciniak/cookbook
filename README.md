> [!WARNING]
> **This app is still in the early stage of development.**
> Because of that, some of the functions are still in progress. When interacting with them you will be notified that this is the case with work-in-progress toast.
> You will find more information below in sections [Known issues](#known-issues) and [Planned features](#planned-features)


# Getting Started

### Overview

This is a simple demo recipe app whose main goal is to showcase part of my dev skills (designed and fully developed by me). It's still in an early stage of development and still needs a lot of work, however, even in its current state there is something to glanced at :sparkles:

Used technologies:
- NextJS v13
- React v18
- TypeScript
- Tailwind
- Lottie
- Mantine (ui lib)


### Running the app

You can visit the [demo page](https://cookbook-alicja-marciniaks-projects.vercel.app/) of this project or run it locally.

1. Clone the repository
2. Build it and run it

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm install
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Known issues

1. Weak support for tablet screens
2. Lagging and (possibly overcomplicated) animation in the search section
3. Improving device detecting mechanism (visible navbar switching issues)
4. Improving performance and adding more lazy loading
5. Unnecessary animation in the search section (when navigated with a link or when the query is cleared)
6. Fixing debounce in the search bar (not catching submit sometimes)

# Planned features

1. Adding blur for loading recipe images
2. Adding an order option to sort select
3. Adding user profile:
   - sign up
   - sign in
   - password reset
   - simple user panel
4. Adding favourite recipes feature
5. Improve explore section - more interesting content (seasonal and trendy suggestions) 
6. Sending emails
7. Creating own recipes

