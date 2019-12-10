// External Deps
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

// Local deps
import { checkProps } from '../../util';
import Tile from './';
import * as actions from '../../redux/mapState/actions';
import MapProvider from '../../context/provider';

const mockCreateTile = jest.fn();

/**
 * Factory function to create
 * a ReactWrapper for the
 * Tile component
 * @function setup
 * @param {object} props - Component props specific to the setup
 * @returns {ReactWrapper} enzyme class
 */
const setup = (props: object = {}): ReactWrapper => {
  mockCreateTile.mockClear();
  // @ts-ignore
  actions.createTile = mockCreateTile;
  const mockUseReducer = jest.fn().mockReturnValue([{}, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount, because useEffect is not called on 'shallow'
  //https://github.com/airbnb/enzyme/issues/2086
  const wrapper = mount(
    <MapProvider>
      <Tile {...props} />
    </MapProvider>
  );
  return wrapper;
};

describe('Tile Component', () => {
  test('should not throw warnings with expected props', () => {
    const expectedProps = { options: {} };
    checkProps(Tile, expectedProps);
  });
  describe('Calls createTile', () => {
    test('should get called on component mount', () => {
      setup({ options: {} });
      // check to see if createTile is called
      expect(mockCreateTile).toHaveBeenCalled();
    });
    test('should not get called on component update', () => {
      const wrapper = setup();
      mockCreateTile.mockClear();

      // wrapper.update() doesn't trigger update
      // (issue forked from https://github.com/airbnb/enzyme/issues/2091)
      // @ts-ignore
      wrapper.setProps();

      expect(mockCreateTile).not.toHaveBeenCalled();
    });
  });
});
