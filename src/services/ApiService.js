import HttpClient from '@/lib/HttpClient';

const ApiService = {
  async getCharacters(page) {
    return await HttpClient.get(`character?page=${page}`);
  },
  async getOneCharacter(id) {
    return await HttpClient.get(`character/${id}`);
  },
  async getOneCharacterByIds(ids) {
    return await HttpClient.get(`character/${ids}`);
  },
  async getLocations(page) {
    return await HttpClient.get(`location?page=${page}`);
  },
  async getOneLocation(id) {
    return await HttpClient.get(`location/${id}`);
  },
  async getEpisodes(page) {
    return await HttpClient.get(`episode?page=${page}`);
  },
  async getOneEpisode(id) {
    return await HttpClient.get(`episode/${id}`);
  }
};

export default ApiService;
