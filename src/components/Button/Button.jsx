import { classNames } from '@/core/utils';
import PropTypes from 'prop-types';

export const Button = ({ children, className, type = 'primary' }) => {
  return (
    <button
      className={classNames(
        className,
        type === 'primary' ? 'bg-rick-primary' : 'bg-rick-black',
        'py-1 px-3 text-white text-sm rounded-full'
      )}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string
};
