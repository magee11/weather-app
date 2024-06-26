import axios from 'axios';

const apiKey = 'd2c27b16320180bf000c42b1ab2b7ba3';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (searchString) => {
  try {
    const response = await axios.get(`${baseUrl}?q=${searchString}&appid=${apiKey}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('City not found');
  }
};
