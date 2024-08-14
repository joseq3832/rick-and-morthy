import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const H2 = ({ children, className }) => {
  return <h2 className={classNames(className, 'text-[32px]')}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
