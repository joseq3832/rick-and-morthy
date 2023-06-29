import { Link } from 'react-router-dom';
import { GenderTag } from '@/components';
import { BsArrowRight } from 'react-icons/bs';

export const CharacterCard = ({ character }) => {
  return (
    <div className="border border-black rounded-none p-4">
      <div className="flex items-center gap-4">
        <div className="w-60 h-full">
          <img
            className="w-full h-full object-cover object-center rounded-sm"
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <h6 className="font-bold text-lg">
              {character.name}
              <span className="block -mt-1.5 bg-red-500 w-24 h-1 my-auto"></span>
            </h6>
            <GenderTag gender={character.gender} />
          </div>
          <div className="flex flex-col gap-3 pl-6 relative">
            <div className="absolute block w-2 h-full left-2 border-l border-black rotate-180 text-vertical text-center">
              caracteristicas
            </div>
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {character.species}
            </div>
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {character.origin.name}
            </div>
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {character.location.name}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 w-full">
        <span>aparece en: {character.episode.length} episodios</span>
        <Link
          to={'/character/' + character.id}
          className="flex items-center justify-center relative group">
          <BsArrowRight className="h-5 -right-0 w-auto opacity-70 hidden group-hover:block absolute transition-all ease-in-out duration-500" />
          <span className='group-hover:-translate-x-7 transition-all ease-in-out duration-300 group-hover:drop-shadow-lg group-hover:shadow-black'>Conoce más</span>
        </Link>
      </div>
    </div>
  );
};
