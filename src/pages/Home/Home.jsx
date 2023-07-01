import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersFetch } from '@/store/slices';
import { H1, H3, H4, Button, SearchInput, CharacterCard } from '@/components';
import { BsMoon, BsSun, BsGrid } from 'react-icons/bs';
import { BiPlanet } from 'react-icons/bi';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { CgScreen } from 'react-icons/cg';

export const Home = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const getCharacters = characters.slice(0, 8);

  useEffect(() => {
    if (characters.length === 0) dispatch(getCharactersFetch());
  }, []);

  return (
    <>
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="mb-16">
              <H1 className="mb-6">
                Tódo en un <br /> solo <span className="text-rick-primary">Lugar.</span>
              </H1>
              <H4>Personajes, lugares, episodios y mucho más.</H4>
            </div>
            <div className="flex items-center justify-start gap-4 mb-6">
              <Button className="flex items-center gap-2">
                <BsMoon />
                Oscuro
              </Button>
              <Button className="flex items-center gap-2" type="secondary">
                <BsSun />
                Claro
              </Button>
            </div>
            <span className="text-rick-primary text-base">I&apos;m, JoseQ3832</span>
          </div>
          <div>
            <img src="/rick.png" alt="Rick" />
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 py-16">
        <div className="flex items-center justify-between mb-14">
          <SearchInput placeholder="Buscar..." onChange={(e) => console.log(e)} />
          <div className="flex items-center gap-4">
            <span className="text-[#E4F4F4]/50">Filtrar por:</span>
            <div className="flex items-center gap-3">
              <Button className="flex items-center gap-1.5">
                <HiOutlineFaceSmile className="h-5 w-auto" />
                Personajes
              </Button>
              <Button className="flex items-center gap-1.5" type="secondary">
                <BiPlanet className="h-5 w-auto" />
                Localizaciones
              </Button>
              <Button className="flex items-center gap-1.5" type="secondary">
                <CgScreen className="h-5 w-auto" />
                Episodios
              </Button>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center gap-5 mb-7">
          <H3 className="text-xl">Personajes</H3>
          <Button className="flex items-center gap-1.5" type="secondary">
            <BsGrid className="h-5 w-auto" />
            Ver todos
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {getCharacters.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
