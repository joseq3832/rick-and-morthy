import { Link } from 'react-router-dom';
import { H4, Button } from '@/components';
import { BsHeart } from 'react-icons/bs';
import { BiPlanet, BiInfoCircle } from 'react-icons/bi';
import { PiAlien, PiPulse } from 'react-icons/pi';

import PropTypes from 'prop-types';

export const CharacterCard = ({ character }) => {
  return (
    <div className="bg-rick-black-100 hover:bg-rick-black transition-all ease-in-out p-4 rounded-lg">
      <img
        className="rounded-2xl w-full h-[200px] object-cover object-center"
        src={character.image}
        alt={character.name}
      />
      <div className="relative text-white mt-4">
        <H4>{character.name}</H4>
        <BsHeart className="h-8 w-auto absolute right-0 top-0 text-rick-primary cursor-pointer" />
        <div className="flex flex-col justify-center items-start gap-2 text-sm mt-4 mb-6">
          <span className="flex items-center gap-1">
            <PiPulse className="text-rick-secondary" /> {character.status}
          </span>
          <span className="flex items-center gap-1">
            <PiAlien />
            {character.species}
          </span>
          <span className="flex items-center gap-1">
            <BiPlanet />
            {character.origin.name}
          </span>
        </div>
        <div className="flex justify-end">
          <Link to={'/character/' + character.slug}>
            <Button
              className="flex items-center gap-1.5 hover:bg-rick-primary transition-all ease-in-out"
              type="secondary">
              <BiInfoCircle className="h-5 w-auto" />
              Saber más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    episode: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
