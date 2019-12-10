// External Deps
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

// Local deps
import { checkProps } from 'src/util';
import Image from './';
import * as actions from 'src/redux/mapState/actions';
import MapProvider from 'src/context/provider';

const mockCreateImage = jest.fn();

/**
 * Factory function to create
 * a ReactWrapper for the
 * Image component
 * @function setup
 * @param {object} props - Component props specific to the setup
 * @returns {ReactWrapper} enzyme class
 */
const setup = (props: object = {}): ReactWrapper => {
  mockCreateImage.mockClear();
  // @ts-ignore
  actions.createImage = mockCreateImage;
  const mockUseReducer = jest.fn().mockReturnValue([{}, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount, because useEffect is not called on 'shallow'
  //https://github.com/airbnb/enzyme/issues/2086
  const wrapper = mount(
    <MapProvider>
      <Image {...props} />
    </MapProvider>,
  );
  return wrapper;
};

describe('Image Component', () => {
  test('should not throw warnings with expected props', () => {
    const expectedProps = { options: {} };
    checkProps(Image, expectedProps);
  });
  describe('Calls createImage', () => {
    test('should get called on component mount', () => {
      setup({ options: {} });
      // check to see if createImage is called
      expect(mockCreateImage).toHaveBeenCalled();
    });
    test('should not get called on component update', () => {
      const wrapper = setup();
      mockCreateImage.mockClear();

      // wrapper.update() doesn't trigger update
      // (issue forked from https://github.com/airbnb/enzyme/issues/2091)
      // @ts-ignore
      wrapper.setProps();

      expect(mockCreateImage).not.toHaveBeenCalled();
    });
  });
});
