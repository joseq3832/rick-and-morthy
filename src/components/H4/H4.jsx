import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const H4 = ({ children, className }) => {
  return <h4 className={classNames(className, 'text-base')}>{children}</h4>;
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
