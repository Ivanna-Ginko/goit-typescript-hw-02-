import axios from "axios"
import { Result } from "../App.types";
import { AbortSignal } from 'abort-controller';


const key = 'cUJdFq7z8hxh-Mr8PhTpetXuMRFUoGqCw_qBW3KNMSk'

type Response = {
    total: number;
    total_pages: number;
    results: Result[];
}

export const fetchResults = async (query: string, page: number, signal: AbortSignal): Promise<Response> => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&per_page=15&query=${query}&page=${page}`, { signal })
  return response.data
}