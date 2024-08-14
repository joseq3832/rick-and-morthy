import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const Paragraph = ({ children, className }) => {
  return <p className={classNames(className, 'text-sm')}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
