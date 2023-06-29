import { useQuery } from '@tanstack/react-query';
import ApiService from '@/services/ApiService';
import { CharacterCard } from '@/components';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async (page) => {
    const { data } = await ApiService.get(page);
    return data;
  };

  const { isLoading, error, data } = useQuery(['characters', page], () => fetchCharacters(page));

  useEffect(() => {
    if (data) {
      setCharacters(data.results);
    }
  }, [data]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < data.info.pages) {
      setPage(page + 1);
    }
  };

  if (isLoading) return 'Cargando...';

  if (error) return 'Ha ocurrido un error: ' + error.message;

  return (
    <>
      <span
        className="fixed top-1/2 left-6 bg-black text-white flex items-center justify-center h-12 w-12 rounded-full hover:scale-105 transition-all hover:transform cursor-pointer"
        onClick={handlePreviousPage}
      >
        <BiLeftArrow className="h-6 w-auto" />
      </span>
      <span
        className="fixed top-1/2 right-6 bg-black text-white flex items-center justify-center h-12 w-12 rounded-full hover:scale-105 transition-all hover:transform cursor-pointer"
        onClick={handleNextPage}
      >
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
