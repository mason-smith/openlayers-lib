import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';
import { Image, Map, Tile, Vector, MapProvider } from '../.';
import { defaultBaseMapOptions, defaultMapOptions } from './showcase';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapProvider>
        <Map options={defaultMapOptions}>
          <Tile options={defaultBaseMapOptions} />
        </Map>
      </MapProvider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
