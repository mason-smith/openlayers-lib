// External Dependencies
import { FC, useEffect } from 'react';
import VectorLayer from 'ol/layer/Vector';

// Local Dependencies
import { useMapDispatch } from '../../hooks';
import { createVector } from '../../redux/mapState/actions';
import VectorProps from './types';

const Vector: FC<VectorProps> = props => {
  const { options } = props;
  const dispatch = useMapDispatch();
  useEffect(() => {
    dispatch(createVector(new VectorLayer(options)));
  }, [dispatch, options]);
  return null;
};

export default Vector;
