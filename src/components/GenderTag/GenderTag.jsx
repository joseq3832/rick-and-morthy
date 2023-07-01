import PropTypes from 'prop-types';
import { classNames } from '@/core/utils/Helpers';

export const GenderTag = ({ gender }) => {
  return (
    <span
      className={classNames(
        gender !== 'Male' ? 'bg-pink-400' : 'bg-orange-400',
        'font-medium text-xs py-1 px-3 text-white rounded-sm'
      )}>
      {gender}
    </span>
  );
};

GenderTag.propTypes = {
  gender: PropTypes.string.isRequired
};
