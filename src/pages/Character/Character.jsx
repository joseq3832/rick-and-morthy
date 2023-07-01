import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Characters, H3, H1, Button } from '@/components';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { BsGenderAmbiguous, BsHeart } from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';
import { PiAlien, PiPulse } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { BiInfoCircle, BiPlanet } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { setSelectedCharacter } from '@/store/slices/charactersSlice';

export const Character = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { characters, selectedCharacter } = useSelector((state) => state.characters);

  const character = characters.find((character) => character.slug === slug);

  if (character) {
    dispatch(setSelectedCharacter(character));
  }

  return (
    <>
      <section className="text-white border-b border-rick-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2">
          <div className="grid grid-cols-3 gap-16 mb-16">
            <div>
              <img
                className="rounded-2xl w-full h-[450px] object-cover object-center"
                src={selectedCharacter?.image}
                alt={selectedCharacter?.name}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <H1>{selectedCharacter?.name}</H1>
                <BsHeart className="h-8 w-auto text-rick-primary cursor-pointer" />
              </div>
              <div className="flex items-center gap-3">
                <CgScreen className="h-5 w-auto" />
                apareció en {selectedCharacter?.episode.length} episodios
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-3">
                  <PiPulse className="text-rick-secondary" /> {selectedCharacter?.status}
                </span>
                <span className="flex items-center gap-3">
                  <PiAlien />
                  {selectedCharacter?.species}
                </span>
                <span className="flex items-center gap-3">
                  <BsGenderAmbiguous />
                  {selectedCharacter?.gender}
                </span>
              </div>
            </div>
            <div className="flex items-end">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-rick-black p-5 pt-10 rounded-2xl flex flex-col items-center gap-4 justify-center text-white relative">
                  <BiPlanet className="absolute h-14 w-auto -top-1 -translate-y-1/2" />
                  <div className="text-center w-full">
                    <h4>Planeta</h4>
                    <span className="text-rick-primary">{selectedCharacter?.origin.name}</span>
                  </div>
                  <Link to="/">
                    <Button
                      className="flex items-center gap-1.5 hover:bg-rick-primary transition-all ease-in-out"
                      type="secondary">
                      <BiInfoCircle className="h-5 w-auto" />
                      Saber más
                    </Button>
                  </Link>
                  <BsHeart className="h-6 w-auto text-rick-primary cursor-pointer" />
                </div>
                <div className="bg-rick-black p-5 pt-10 rounded-2xl flex flex-col items-center gap-4 justify-center text-white relative">
                  <CiLocationOn className="absolute h-14 w-auto -top-1 -translate-y-1/2" />
                  <div className="text-center w-full">
                    <h4>Localidad</h4>
                    <span>{selectedCharacter?.location.name}</span>
                  </div>
                  <Link to="/">
                    <Button
                      className="flex items-center gap-1.5 hover:bg-rick-primary transition-all ease-in-out"
                      type="secondary">
                      <BiInfoCircle className="h-5 w-auto" />
                      Saber más
                    </Button>
                  </Link>
                  <BsHeart className="h-6 w-auto text-rick-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 py-16">
        <div className="text-white flex items-center gap-5 mb-7">
          <H3 className="text-xl flex items-center gap-3">
            <HiOutlineFaceSmile className="h-6 w-auto" />
            Más personajes
          </H3>
        </div>
        <Characters />
      </section>
    </>
  );
};
