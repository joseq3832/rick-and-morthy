import axios from 'axios';
import { useState } from 'react';

const { VITE_REMOVEBG_API_KEY } = import.meta.env;

export const RemoveBg = ({ url }) => {
  const [image, setImage] = useState();

  const requestData = {
    size: 'auto',
    image_url: 'https://www.remove.bg/example.jpg'
  };

  axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: requestData,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': VITE_REMOVEBG_API_KEY
    },
    encoding: null
  })
    .then((response) => {
      console.log(response.data);
      setImage(response.data);
    })
    .catch((error) => {
      return console.error('Request failed:', error);
    });

  return (
    <div>
      {image ? (
        <img src={`data:image/png;base64,${image}`} alt="Background Removed" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
