import { ReactWrapper } from 'enzyme';
import { checkPropTypes } from 'prop-types';

/**
 * Return ReactWrapper containing node(s)
 * with given data-test value
 * @param {ReactWrapper}wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute
 * @returns {ReactWrapper} enzyme class
 */
export const findByTestAttr = (
  wrapper: ReactWrapper,
  val: string,
): ReactWrapper => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 *
 * @param {ReactElement} component - JSX Element
 * @param conformingProps
 */
//@ts-ignore
export const checkProps = (component: ReactElement, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name,
  );
  expect(propError).toBeUndefined();
};
