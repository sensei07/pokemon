## Technologies used in the project
- React; 
- TypeScript;
- Eslint;
- Axios; 
- Rest API;
- Redux-toolkit; 
- SCSS modules;
- All necessary technologies were used
----

## Launch of the project

```
yarn install - install dependencies
npm run start - frontend project in dev mode
```

## Launch of the project

```
yarn install - install dependencies
npm run start - frontend project in dev mode
```

----

## Scripts
- `npm run start` - Launching a frontend project on webpack dev server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Correcting ts files with a linter
- `npm run lint:scss` - Checking style scss files with a linter
- `npm run lint:scss:fix` - Correcting scss style files with a linter
- `npm run test:unit` - Running unit tests in jest

----

## Project architecture

The project was written in accordance with the Feature sliced ​​design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`

----

##### Running linters
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Correcting ts files with a linter
- `npm run lint:scss` - Checking style scss files with a linter
- `npm run lint:scss:fix` - Correcting scss style files with a linter

----

### Working with data

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

