// External Deps
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

// Local deps
import { checkProps } from '../../util';
import Vector from './';
import * as actions from '../../redux/mapState/actions';
import MapProvider from '../../context/provider';

const mockCreateVector = jest.fn();

/**
 * Factory function to create
 * a ReactWrapper for the
 * Vector component
 * @function setup
 * @param {object} props - Component props specific to the setup
 * @returns {ReactWrapper} enzyme class
 */
const setup = (props: object = {}): ReactWrapper => {
  mockCreateVector.mockClear();
  // @ts-ignore
  actions.createVector = mockCreateVector;
  const mockUseReducer = jest.fn().mockReturnValue([{}, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount, because useEffect is not called on 'shallow'
  //https://github.com/airbnb/enzyme/issues/2086
  const wrapper = mount(
    <MapProvider>
      <Vector {...props} />
    </MapProvider>
  );
  return wrapper;
};

describe('Vector Component', () => {
  test('should not throw warnings with expected props', () => {
    const expectedProps = { options: {} };
    checkProps(Vector, expectedProps);
  });
  describe('Calls createVector', () => {
    test('should get called on component mount', () => {
      setup({ options: {} });
      // check to see if createVector is called
      expect(mockCreateVector).toHaveBeenCalled();
    });
    test('should not get called on component update', () => {
      const wrapper = setup();
      mockCreateVector.mockClear();

      // wrapper.update() doesn't trigger update
      // (issue forked from https://github.com/airbnb/enzyme/issues/2091)
      // @ts-ignore
      wrapper.setProps();

      expect(mockCreateVector).not.toHaveBeenCalled();
    });
  });
});
