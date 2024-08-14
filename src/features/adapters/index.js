export const createAdapterCharacter = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode
}) => {
  let translatedStatus;

  if (status === 'Alive') {
    translatedStatus = 'Vivo';
  } else if (status === 'Dead') {
    translatedStatus = 'Muerto';
  } else if (status === 'unknown') {
    translatedStatus = 'Desconocido';
  }

  const slug = generateSlug(name);

  const character = {
    id,
    name,
    slug,
    status: translatedStatus,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode
  };
  return character;
};

const generateSlug = (text) => {
  const formattedText = text.toLowerCase().replace(/\s+/g, '-');
  return formattedText;
};
