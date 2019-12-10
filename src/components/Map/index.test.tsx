// External Deps
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

// Local deps
import { findByTestAttr, checkProps } from '../../util';
import MapDisplay from '.';
import * as actions from '../../redux/mapState/actions';
import MapProvider from '../../context/provider';

const mockCreateMap = jest.fn();

/**
 * Factory function to create
 * a ReactWrapper for the
 * MapDisplay component
 * @function setup
 * @param {object} props - Component props specific to the setup
 * @returns {ReactWrapper} enzyme class
 */
const setup = (props: object = {}): ReactWrapper => {
  mockCreateMap.mockClear();
  // @ts-ignore
  actions.createMap = mockCreateMap;
  const mockUseReducer = jest.fn().mockReturnValue([{}, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount, because useEffect is not called on 'shallow'
  //https://github.com/airbnb/enzyme/issues/2086
  const wrapper = mount(
    <MapProvider>
      <MapDisplay {...props} />
    </MapProvider>
  );
  return wrapper;
};

describe('MapDisplay Component', () => {
  describe('can render', () => {
    test('should render without crashing', () => {
      const wrapper = setup();
      const map = findByTestAttr(wrapper, 'component-map-display');
      expect(map.length).toBe(1);
    });
    test('should not throw warnings with expected props', () => {
      const expectedProps = { options: {} };
      checkProps(MapDisplay, expectedProps);
    });
  });
  describe('Conditional rendering based on "options" prop', () => {
    test('should render default map when "options" prop is undefined', () => {
      const wrapper = setup();
      const defaultMap = findByTestAttr(wrapper, 'default-map');
      expect(defaultMap.length).toBe(1);
    });
    test('should render user-generated map when "options" prop is defined', () => {
      const wrapper = setup({ options: {} });
      const userMap = findByTestAttr(wrapper, 'user-map');
      expect(userMap.length).toBe(1);
    });
  });
  describe('Calls createMap', () => {
    test('should get called on component mount', () => {
      setup({ options: {} });
      // check to see if createMap is called
      expect(mockCreateMap).toHaveBeenCalled();
    });
    test('should not get called on component update', () => {
      const wrapper = setup();
      mockCreateMap.mockClear();

      // wrapper.update() doesn't trigger update
      // (issue forked from https://github.com/airbnb/enzyme/issues/2091)
      // @ts-ignore
      wrapper.setProps();

      expect(mockCreateMap).not.toHaveBeenCalled();
    });
  });
});
