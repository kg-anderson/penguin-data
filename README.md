# Penguin Data

This is a starter project that attempted to use React and chartJS to display the open access data of penguin population counts. The data is sourced from MAPPPD (Mapping Application for Penguin Populations and Projected Dynamics)

## Screenshots

## Current state & issues
This was a starter project to get more familiar with React and react-router. However after completing the first version it is clear that the component structure of the site is not adequate as there are issues with re-rendering no occurring. 

Future steps will involve a clean-up of all components and separation of code into additional components.  

## Setup

The repo does not contain the full dataset from MAPPPD but the seed file has a few entries.

After cloning the repo you will need to: 

```sh
cd penguin-data
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

* Navigate to [http://localhost:3000](http://localhost:3000)
