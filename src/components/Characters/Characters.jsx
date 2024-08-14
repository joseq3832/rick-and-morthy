import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersFetch } from '@/store/slices';
import { CharacterCard, Pagination } from '@/components';

export const Characters = () => {
  const dispatch = useDispatch();
  const { characters, page, totalPages, isLoading, isError } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    if (characters.length === 0) dispatch(getCharactersFetch(page));
  }, []);

  const handlePreviousPage = () => {
    if (page > 1) dispatch(getCharactersFetch(page - 1));
  };

  const handleNextPage = () => {
    if (page < totalPages) dispatch(getCharactersFetch(page + 1));
  };

  const handleGoToPage = (e) => {
    dispatch(getCharactersFetch(e));
  };

  if (isLoading) return 'Cargando...';

  if (isError) return 'Ha ocurrido un error: ' + isError;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </div>
      <Pagination
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        goToPage={handleGoToPage}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
};
