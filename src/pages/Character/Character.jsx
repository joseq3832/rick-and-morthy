import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { GenderTag, RemoveBg } from '@/components';
import ApiService from '@/services/ApiService';

export const Character = () => {
  const { id } = useParams();

  const fetchCharacter = async (id) => {
    const { data } = await ApiService.getOne(id);
    return data;
  };

  const { isLoading, error, data } = useQuery(['character', id], () => fetchCharacter(id));

  if (isLoading) return 'Cargando...';

  if (error) return 'Ha ocurrido un error: ' + error.message;

  console.log(data);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h1>{data.name}</h1>
          <span>{data.status}</span>
          <GenderTag gender={data.gender} />
          <div className="flex flex-col gap-3 mt-5">
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {data.species}
            </div>
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {data.origin.name}
            </div>
            <div className="bg-[#21305F] px-3 py-2 text-white text-sm rounded-sm shadow-sm">
              {data.location.name}
            </div>
          </div>
        </div>
        <div>
          <img src={data.image} alt="data.name" />
        </div>
      </div>
    </section>
  );
};
