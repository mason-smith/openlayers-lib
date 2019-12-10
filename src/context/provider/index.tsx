import React, { FC, ReactNode } from 'react';
import mapReducer, { initialMapState } from '../../redux/mapState/reducer';
import { MapStateContext, MapDispatchContext } from '../';

/**
 * Creates a provider that allows child components
 * to access global state and dispatchers
 *
 * @param {ReactNode} children - a react component
 */
const MapProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  // useReducer is basically createStore() from redux
  // https://www.robinwieruch.de/redux-vs-usereducer

  // Check out https://www.robinwieruch.de/react-usereducer-hook
  // for a decent explanation of how to implement useReducer
  const [state, dispatch] = React.useReducer(mapReducer, initialMapState);
  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
};

export default MapProvider;
