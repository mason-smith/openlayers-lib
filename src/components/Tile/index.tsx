// External Dependencies
import { FC, useEffect } from 'react';
import OLTile from 'ol/layer/Tile';

// Local Dependencies
import TileProps from './types';
import { useMapDispatch } from '../../hooks';
import { createTile } from '../..//redux/mapState/actions';
import { defaultTile } from './defaultTile';

const Tile: FC<TileProps> = (props): null => {
  const { options } = props;
  const dispatch = useMapDispatch();
  useEffect(() => {
    options
      ? dispatch(createTile(new OLTile(options)))
      : dispatch(createTile(new OLTile(defaultTile)));
  }, [dispatch, options]);
  return null;
};

export default Tile;
