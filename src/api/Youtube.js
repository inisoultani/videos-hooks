import axios from 'axios';

const KEY = 'AIzaSyBKpy-dHukILcWZtzPwbEWsHk0Zloh6GSc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    type: 'video',
    part: 'snippet',
  },
});
