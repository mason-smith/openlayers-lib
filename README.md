# i4-openlayers-react

Template files for HMRC's component library and assets-frontend

- [Installing](#installing)
- [Developing Locally](#requirements)
- [Adding Custom comment tags](#adding-custom-comment-tags)
- [Adding Custom Handlebars Block Helpers](#adding-custom-handlebars-block-helpers)
- [Partials](#partials)
- [Contributing](#contributing)
- [License](#license)

## Installing

[Connect to feed](https://i4insight.visualstudio.com/i4InsightMain/_packaging?_a=connect&feed=i4npm)

then

```
$ npm install i4-openlayers-react
```

## Using in your project

Every map must be wrapped in a `<MapProvider>` component. Each component can take an `options` prop - an object with [openlayers options](https://openlayers.org/en/latest/apidoc/) configuration options.

The `<Map>` component does not need to be passed options, and will display the default [OSM](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html) unless `options` have been added

e.g.:

```javascript
// map.js
/**
 * This is all you need to set up a simple map.
 */
<div style={{ height: '100vh', width: '100vw' }}>
  <MapProvider>
    <Map />
  </MapProvider>
<div>
```

Don't forget to wrap your map in a container `<div>` that sets the desired width and height of your map. The `<Map>` takes up 100% of the dimensions of it's container,but does not inherently have dimensions of its own.

```javascript
// options.js
/**
 * Example options to pass to your components
*/
import XYZ from 'ol/source/XYZ';

const mapOptions = {
  layers: [],
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 0,
  })
}

const baseTile = {
  visible: true,
  preload: Infinity,
  source: new BingMaps({
    imagerySet: 'Road',
    key: '<API_KEY>',
    wrapX: true,
  }),
}

const seaTile = {
  source: new XYZ({
    url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png',
  }),
}

// map.js
/**
 * This is all you need to set up a simple map.
 */
<div style={{ height: '100vh', width: '100vw' }}>
  <MapProvider>
    <Map options={mapOptions}>
      <Tile options={baseTile}/>
      <Tile options={seaTile}>
    </Map>
  </MapProvider>
<div>
```

## Developing Locally

To see your changes to `i4-openlayers-react` locally you'll need to run both the root and the example/ folders:

```
$ git clone **Need to add this**
$ cd i4-openlayers-react
$ npm start
```

and in another tab

```
$ cd i4-openlayers-react/example
$ npm start
```

### Manually update

Then every time you make an update to the template, TSDX will rebuild and refresh for you

## License

This code is open source software licensed under the MIT License.

## Acknowledgments

- This library was scaffolded by with [TSDX](https://github.com/jaredpalmer/tsdx)

# TSDX React User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing React components (not apps!) that can be published to NPM. If you’re looking to build an app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)
