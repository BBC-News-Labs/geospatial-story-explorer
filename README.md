# geospatial-story-explorer

## Setup

```
git clone git@github.com:BBC-News-Labs/geospatial-story-explorer.git
cd geospatial-story-explorer
npm install
bower install
node server.js
```

## Add a Storyline

You can create a new storyline by adding a JSON file defining it in `public/data/stories`. Whatever you name your `superstory.json` will be used in the URL as a slug, like so: `http://localhost:3000/superstory`. 

You'll likely want to add one or more maps, which are defined as KML files in `public/data/kml` and referenced in the story json.

## View a Storyline

Append the storyline slug to the url: `http://localhost:3000/superstory`. It currently defaults to `arab_spring`.
