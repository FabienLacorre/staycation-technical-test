# Staycation's Technical Test

Hello !

Here's my solution to the technical test you suggested!
For this test I used React for the front end and NodeJs (express) for the back end. Everything is coded in typescript.
There's also a very basic storybook (only 2 components).

I hope you enjoy the project as much as I enjoyed coding it!

See you soon!

## Launch the apps

- `docker-compose up -V`
- `cd front; npm install; npm run start`
- `cd back; npm install; npm run start`

## Launch the storybook

- `cd front; npm run storybook` (there's a storybook-with-options command which allows you to run the storybook according to mac versions)

## Explanation of project architecture:

### front (React)

- I've implemented a design system for the front, with basic components. They're in the `src/DesignSystem` folder.
- The business components are in the `src/Components` folder.
- There are several slice de store redux for managing application data, located in the `src/Store` folder.
- An API folder contains calls to APIs, located in the `src/API` folder. The Thunks that encapsulate the logic are in the `src/Thunks` folder.

### back (NodeJs)

- I implemented a REST API for the back with express.
- I've implemented an architecture with route, controller and service. Routes are in the `src/API/Routes` folder, controllers in the `src/API/Controllers` folder and services in the `src/API/Services` folder.
- Entity and request management was done with typeorm, entities are in the `src/database/Entities` folder.
- I chose to implement a DAL for data management, found in the `src/database/DAL` folder.

## Answer to the app cache question

it can be found in the “cache-implementation.md" file
It's a quick answer, but we can discuss it in more detail during the interview :)
