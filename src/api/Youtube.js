import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyBKpy-dHukILcWZtzPwbEWsHk0Zloh6GSc',
    type: 'video',
    part: 'snippet',
  },
});
