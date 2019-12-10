// External Dependencies
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import Image from 'ol/layer/Image';
import Vector from 'ol/layer/Vector';

// Local Dependencies
import { MapDisplayProps } from './types';
import { defaultMap } from './defaultMap';
import { createMap } from '../../redux/mapState/actions';
import { useMapDispatch, useMapState } from '../../hooks';
import useStyles from './styles';

/**
 *
 * @param props - props passed to component
 */
const MapDisplay: FC<MapDisplayProps> = (props): ReactElement => {
  const { children, options } = props;
  const classes = useStyles();
  // mapDispatchToProps
  const dispatch = useMapDispatch();
  // mapStateToProps
  const { mapOptions, tiles, images, vectors } = useMapState();
  /**
   * Sends our map options to store
   * after checking if user-generated
   * options are provided or not
   */
  React.useEffect(() => {
    options ? dispatch(createMap(options)) : dispatch(createMap(defaultMap));
  }, [dispatch, options]);
  /**
   * Creates map and updates as necessary
   * May consider employing useState to
   * keep component-level map state and global map
   * for comparisons and to prevent double
   * rendering if / when child component
   * `options` props get updated in application level
   */
  React.useEffect(() => {
    const map = new Map(mapOptions);
    tiles.map((tile: Tile) => {
      return map.addLayer(tile);
    });
    images.map((image: Image) => {
      return map.addLayer(image);
    });
    vectors.map((vector: Vector) => {
      return map.addLayer(vector);
    });
  }, [mapOptions, tiles, images, vectors]);

  return (
    <div data-test="component-map-display" className={classes.mapContainer}>
      {options ? (
        <div data-test="user-map" id="map" className={`map ${classes.map}`}>
          {children}
        </div>
      ) : (
        <div data-test="default-map" id="map" className={`map ${classes.map}`}>
          {children}
        </div>
      )}
    </div>
  );
};

MapDisplay.propTypes = {
  children: PropTypes.object,
  options: PropTypes.object,
};

export default MapDisplay;
