import axios from "axios";

export const api = axios.create({
  baseURL: 'https://notesexplore-api.onrender.com'
});
