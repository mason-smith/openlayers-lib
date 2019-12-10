import { createContext } from 'react';
import { MapState } from '../redux/mapState/types';

type Dispatch = (action: any) => void;

/**
 * Creates context for component / application state
 */
const MapStateContext = createContext<MapState | undefined>(undefined);

/**
 * Creates context for dispatchers
 */
const MapDispatchContext = createContext<Dispatch | undefined>(undefined);

export { MapStateContext, MapDispatchContext };
