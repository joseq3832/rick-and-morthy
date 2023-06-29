import HttpClient from '@/lib/HttpClient';

const ApiService = {
  async get(page) {
    return await HttpClient.get(`character?page=${page}`);
  },
  async getOne(id) {
    return await HttpClient.get(`character/${id}`);
  }
};

export default ApiService;
