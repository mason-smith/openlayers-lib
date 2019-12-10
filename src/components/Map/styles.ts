import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mapContainer: { width: '100%', height: '100%' },
  map: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    position: 'relative',
  },
});

export default useStyles;
