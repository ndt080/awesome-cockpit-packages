# Cockpit UI Packages

A repository containing extensions (packages) for [Cockpit system](https://github.com/cockpit-project/cockpit).

Cockpit is an interactive server admin interface. It is easy to use and very lightweight. Cockpit interacts directly with the operating system from a real Linux session in a browser.

This repository provides a custom starter to create your own UI package.
Run the code in development mode to test the user interface based on the PatternFly UI component library
and non-system Cockpit API.

# Getting Started

### Requirements

- Node.js >= 18.16.1
- pnpm >= 8.14.1

### Setup environment

Install `node.js` from the [official website](https://nodejs.org),
or use `nvm`
[for Linux](https://github.com/nvm-sh/nvm),
[for Windows](https://github.com/coreybutler/nvm-windows),
[for macOS](https://formulae.brew.sh/formula/nvm)

Install a modern package manager to manage dependencies and monorepository - `pnpm` using the command

```bash
npm install -g pnpm
```

### Initialize Cockpit API

The monorepository packages use a number of Cockpit libraries that provide access to
internationalization, to the system API and the capabilities of Cockpit as a platform.

<span style="color: #cc0000">
Important! In development mode, the capabilities of the Cockpit API are limited.
Use a test machine with Cockpit to check the built package.
</span>

To initialize the Cockpit API, execute the next script in your bash or zsh terminal.
_(Git bash or WSL for Windows users)_

```bash
./cockpit.sh
```

### Build packages

After making changes, you need to start building packages.

You can use next command to run the **build of all packages WITHOUT combining** them in the root `build` directory

```bash
npm run build:modules
```

or use command to run the **build of all packages WITH combining** them in the root `build` directory

```bash
./cockpit-build.sh
```

or equal npm command

```bash
npm run build:shell
```

# How do I create a new Cockpit UI Package?

1. Create a new Vite-based project in the `packages` folder. And register it in the root `package.json` file
2. Import the custom build plugin and configure your vite configuration file `vite.config.js`

```js 
import CustomizedBuild from '../../plugins/customizedBuild.js';

export default defineConfig({
  plugins: [
    CustomizedBuild(),
  ],
  base: './',
  build: {
    minify: true,
    target: 'esnext',
    assetsDir: 'app',
  },
});
```

3. Replace the content `index.html` file to the content below. Note to the path to your application root file

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Script Manager</title>
  <!--%CUSTOM_RESOURCES%-->
</head>
<body>
<div id="root"></div>
<!--Import your application root file. Here is "stc/main.tsx"-->
<script src="src/main.tsx" type="module"></script>
</body>
</html>

```

4. Create a manifest of your Cockpit Package. Place the `manifest.json` file in `"packages/YOUR_PACKAGE/public/manifest.json"`
   Learn more about the [Cockpit package manifest](https://cockpit-project.org/guide/latest/packages.html#package-manifest)

# Clear pnpm cache

```bash
pnpm stores prune
```
