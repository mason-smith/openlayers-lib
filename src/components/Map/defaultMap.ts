import { defaults as defaultControls } from 'ol/control';
import { defaults } from 'ol/interaction';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const medview = new View({
  projection: 'EPSG:4326', // OPTIONS - 3857 or 4326
  center: [0, 0],
  zoom: 0,
});

const defaultTile = () => {
  const basemap = new Tile({
    visible: true,
    preload: Infinity,
    source: new OSM(),
  });
  basemap.set('myId', 'Maps');
  return basemap;
};

/**
 * default map provided if no options given
 * https://openlayers.org/en/latest/doc/quickstart.html
 */
export const defaultMap = {
  target: 'map',
  layers: [defaultTile()],
  view: medview,
  loadTilesWhileInteracting: true,
  controls: defaultControls({
    zoom: true,
    attribution: false,
    rotate: false,
    zoomOptions: { delta: 1 },
  }),
  interactions: defaults({
    altShiftDragRotate: false,
    keyboard: false,
    zoomDelta: 1,
  }),
};
