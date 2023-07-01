import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const H3 = ({ children, className }) => {
  return <h3 className={classNames(className, 'text-2xl font-bold')}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
