import { classNames } from '@/core/utils';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchInput = ({ placeholder, defaultValue, onChange, className }) => {
  const handleChange = (e) => {
    return onChange(e.target.value);
  };

  return (
    <div
      className={classNames(
        className,
        'py-1.5 pl-6 pr-10 rounded-full relative text-white bg-[#1A1A1A]'
      )}>
      <input
        type="text"
        className=" bg-transparent focus-within:outline-none placeholder-[#E4F4F4]/50"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <BsSearch className="h-5 w-auto absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};
