# ReactJS Boilerplate

This project is build by Nguyen Duc Cuong

## Table of Contents

- [Prerequisites](#prerequisites)
- [Manual Installation](#manual-installation)
- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Linting](#linting)
- [License](#license)

## Prerequisites

- [NodeJS](https://nodejs.org/en) (Recommended LTS version)

## Manual Installation

Clone the repo:

```bash
git clone https://gitlab.com/CuongTelemed/ris-web-app.git
cd ris-web-app
```

Install [yarn](https://yarnpkg.com):

```bash
npm install -g yarn
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Features

- **API Calling**: using [axios](https://github.com/axios/axios)
- **CSS Framework**: using [tailwindcss](https://tailwindcss.com/)
- **State Management**: using [redux](https://redux.js.org/) and [redux-saga](https://redux-saga.js.org/)
- **Multi languages**: language management with [i18next](https://www.i18next.com/)
- **Routing**: the application is routing with [react-router-dom](https://reactrouter.com/)
- **Form Handling**: form handling with [react-hook-form](https://react-hook-form.com/)
- **Validation**: form data validation using [yup](https://github.com/jquense/yup)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

Runs the app in the development mode:

```bash
yarn start
```

Launches the test runner in the interactive watch mode:

```bash
yarn test
```

Builds the app for production to the `build` folder:

```bash
yarn build
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

`.env`

```bash
# api base URl
REACT_APP_API_URL=http://localhost:5000
```

## Project Structure

```
src\                      # Contains all of our react codebase
|-- app\                  # Global app setup
|-- assets\               # Images, fonts and other static files
|   |-- fonts\            # Fonts
|   |-- images\           # Images
|   |-- ...
|-- components\           # Dumb components
|   |-- Common\           # Common components
|   |-- Form\             # Form components
|   |-- Guard\            # Guard components
|   |-- Layout\           # Layout components
|   |-- ...
|-- config\               # Config files
|-- constants\            # Constants variables
|-- features\             # Contains all feature folders
|   |-- auth\             # Auth features
|   |   |-- components\   # Components for auth features
|   |   |-- pages\        # Pages for auth features
|   |   |-- ...
|   |-- ...
|-- hooks\                # Custom hooks
|-- locales\              # Multi language
|   |-- en\               # English
|   |-- vi\               # Vietnamese
|   |-- ...
|-- models\               # App modeling
|-- routes\               # App routing.
|-- services\             # Api call related functions.
|-- types\                # Typescript related files or functions
|-- utils\                # Utility classes and functions
|-- index.tsx             # App entry point
|-- ...
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc` file. To modify the Prettier configuration, update the `.prettierrc` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

## License

[MIT](LICENSE)
