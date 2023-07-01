import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const H1 = ({ children, className }) => {
  return <h1 className={classNames(className, 'font-bold text-5xl')}>{children}</h1>;
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
