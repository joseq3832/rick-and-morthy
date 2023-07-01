import { classNames } from '@/core/utils';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const Pagination = ({ previousPage, nextPage, goToPage, page, totalPages }) => {
  const handlePreviousPage = () => {
    previousPage();
  };

  const handleNextPage = () => {
    nextPage();
  };

  const handleGoToPage = (pageNumber) => {
    goToPage(pageNumber);
  };

  const pageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;
    const halfMaxButtonsToShow = Math.floor(maxButtonsToShow / 2);
    const firstPage = Math.max(page - halfMaxButtonsToShow, 1);
    const lastPage = Math.min(firstPage + maxButtonsToShow - 1, totalPages);

    if (firstPage > 1) {
      buttons.push(
        <span
          key={1}
          className="flex items-center justify-center h-9 w-9 border border-white rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleGoToPage(1)}>
          1
        </span>
      );

      if (firstPage > 2) {
        buttons.push(
          <span key="dotsStart" className="flex items-center justify-center h-9 w-9">
            ...
          </span>
        );
      }
    }

    for (let i = firstPage; i <= lastPage; i++) {
      buttons.push(
        <span
          key={i}
          className={classNames(
            page === i ? 'bg-rick-primary border-rick-primary scale-110' : 'border-white',
            'flex items-center justify-center h-9 w-9 border rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out'
          )}
          onClick={() => handleGoToPage(i)}>
          {i}
        </span>
      );
    }

    if (lastPage < totalPages) {
      if (lastPage < totalPages - 1) {
        buttons.push(
          <span key="dotsEnd" className="flex items-center justify-center h-9 w-9">
            ...
          </span>
        );
      }

      buttons.push(
        <span
          key={totalPages}
          className="flex items-center justify-center h-9 w-9 border border-white rounded-full cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleGoToPage(totalPages)}>
          {totalPages}
        </span>
      );
    }

    return buttons;
  };

  return (
    <div className="mt-16 flex items-center justify-center gap-3 text-white">
      <span
        className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        onClick={handlePreviousPage}>
        <BsChevronLeft className="h-6 w-auto" />
      </span>
      {pageButtons()}
      <span
        className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        onClick={handleNextPage}>
        <BsChevronRight className="h-6 w-auto" />
      </span>
    </div>
  );
};

Pagination.propTypes = {
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  goToPage: PropTypes.func,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
