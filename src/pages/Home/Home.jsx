import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersFetch } from '@/store/slices';
import { CharacterCard } from '@/components';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export const Home = () => {
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

  if (isLoading) return 'Cargando...';

  if (isError) return 'Ha ocurrido un error: ' + isError;

  return (
    <>
      <span
        className="fixed top-1/2 left-6 bg-black text-white flex items-center justify-center h-12 w-12 rounded-full hover:scale-105 transition-all hover:transform cursor-pointer"
        onClick={handlePreviousPage}>
        <BiLeftArrow className="h-6 w-auto" />
      </span>
      <span
        className="fixed top-1/2 right-6 bg-black text-white flex items-center justify-center h-12 w-12 rounded-full hover:scale-105 transition-all hover:transform cursor-pointer"
        onClick={handleNextPage}>
        <BiRightArrow className="h-6 w-auto" />
      </span>

      <section className="grid grid-cols-2 gap-6">
        {characters.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </section>
    </>
  );
};
