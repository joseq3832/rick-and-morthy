import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersFetch, getLocationsFetch, getEpisodesFetch } from '@/store/slices';
import { H1, H3, H4, Button, SearchInput, CharacterCard } from '@/components';
import { BsMoon, BsSun, BsGrid, BsHeart } from 'react-icons/bs';
import { BiInfoCircle, BiPlanet } from 'react-icons/bi';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { CgScreen } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const { episodes } = useSelector((state) => state.episodes);
  const { locations } = useSelector((state) => state.locations);

  const getCharacters = characters.slice(0, 8);
  const getEpisodes = episodes.slice(0, 4);
  const getLocations = locations.slice(0, 7);

  useEffect(() => {
    if (characters.length === 0) dispatch(getCharactersFetch());
    if (episodes.length === 0) dispatch(getEpisodesFetch());
    if (locations.length === 0) dispatch(getLocationsFetch());
  }, []);

  return (
    <>
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="mb-16">
              <H1 className="mb-6">
                Todo en developppp wipp <br /> solo <span className="text-rick-primary">Lugar.</span>
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
      <section className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 py-16">
        <div className="text-white flex items-center gap-5 mb-7">
          <H3 className="text-xl">Episodios</H3>
          <Button className="flex items-center gap-1.5" type="secondary">
            <BsGrid className="h-5 w-auto" />
            Ver todos
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {getEpisodes.map((episode, index) => (
            <div
              className="bg-rick-black-100 hover:bg-rick-black transition-all ease-in-out px-4 py-6 rounded-lg text-white"
              key={index}>
              <div className="flex items-center mb-4">
                <CgScreen className="h-5 w-auto mr-3" />
                <span className="text-sm">
                  {episode.name} | {episode.episode}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <Link to="/">
                  <Button className="flex items-center gap-1.5 hover:bg-rick-primary transition-all ease-in-out">
                    <BiInfoCircle className="h-5 w-auto" />
                    Saber más
                  </Button>
                </Link>
                <BsHeart className="h-6 w-auto text-rick-primary cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 py-16">
        <div className="text-white flex items-center gap-5 mb-12">
          <H3 className="text-xl">Lugares</H3>
          <Button className="flex items-center gap-1.5" type="secondary">
            <BsGrid className="h-5 w-auto" />
            Ver todos
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {getLocations.map((location, index) => (
            <div
              className="bg-rick-black-100 hover:bg-rick-black transition-all ease-in-out p-5 pt-10 rounded-2xl flex flex-col items-center gap-4 justify-center text-white relative"
              key={index}>
              <BiPlanet className="absolute h-14 w-auto -top-1 -translate-y-1/2" />
              <div className="text-center w-full">
                <h4>Planeta</h4>
                <span className="text-rick-primary">{location.name}</span>
              </div>
              <Link to="/">
                <Button className="flex items-center gap-1.5 hover:bg-rick-primary transition-all ease-in-out">
                  <BiInfoCircle className="h-5 w-auto" />
                  Saber más
                </Button>
              </Link>
              <BsHeart className="h-6 w-auto text-rick-primary cursor-pointer" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
