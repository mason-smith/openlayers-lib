import BingMaps from 'ol/source/BingMaps';

export const defaultTile = {
  visible: true,
  preload: Infinity,
  source: new BingMaps({
    imagerySet: 'Road',
    key: 'AvnXVFWlG4uN3vqXCd5OCrNc3-fV5qDdtSJ6ApOOs23YJb8GoplSIGldeIAKfuyp',
    wrapX: true,
  }),
};
