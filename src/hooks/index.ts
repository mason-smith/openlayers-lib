import { useContext } from 'react';
import { MapStateContext, MapDispatchContext } from '../context';

/**
 * Allows component to access state
 * if called within MapProvider
 *
 * Effectively Context's version of mapStateToProps
 */
const useMapState = () => {
  const context = useContext(MapStateContext);
  if (context === undefined) {
    throw new Error('useMapState must be used within a MapProvider');
  }
  return context;
};

/**
 * Allows component to access dispatch
 * if called within MapProvider
 *
 * Effectively Context's version of mapDispatchToProps
 */
const useMapDispatch = () => {
  const context = useContext(MapDispatchContext);
  if (context === undefined) {
    throw new Error('useMapDispatch must be used within a MapProvider');
  }
  return context;
};

export { useMapState, useMapDispatch };
