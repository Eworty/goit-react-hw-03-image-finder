import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=34316005-d60ef154bb310f3bce8c74629&image_type=photo&orientation=horizontal';

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(`&per_page=12&page=${page}&q=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
