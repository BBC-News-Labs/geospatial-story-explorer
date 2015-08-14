# geospatial-story-explorer

## Setup

You'll need [node](http://nodejs.org), [npm](https://www.npmjs.com), [bower](http://bower.io/), and [grunt](http://gruntjs.com/getting-started) installed first. On the Mac, many of these can be easily installed with [homebrew](http://brew.sh/) but each website also has installation instructions.

```
git clone git@github.com:BBC-News-Labs/geospatial-story-explorer.git
cd geospatial-story-explorer
npm install
bower install
grunt less
node server.js
```

## Add a Storyline

You can create a new storyline by adding a JSON file defining it in `public/data/stories`. Whatever you name your `superstory.json` will be used in the URL as a slug, like so: `http://localhost:3000/superstory`. 

You'll likely want to add one or more maps, which are defined as KML files in `public/data/kml` and referenced in the story json.

## View a Storyline

Append the storyline slug to the url: `http://localhost:3000/superstory`. It currently defaults to `arab_spring`.
