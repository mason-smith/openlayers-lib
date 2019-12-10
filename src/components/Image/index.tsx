// External Deps
import { FC, useEffect } from 'react';
import OLImage from 'ol/layer/Image';

// Local Deps
import ImageProps from './types';
import { useMapDispatch } from '../../hooks';
import { createImage } from '../../redux/mapState/actions';

const Image: FC<ImageProps> = props => {
  const { options } = props;
  const dispatch = useMapDispatch();
  useEffect(() => {
    dispatch(createImage(new OLImage(options)));
  }, [dispatch, options]);
  return null;
};

export default Image;
