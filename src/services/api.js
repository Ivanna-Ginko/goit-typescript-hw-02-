import axios from "axios"

const key = 'cUJdFq7z8hxh-Mr8PhTpetXuMRFUoGqCw_qBW3KNMSk'


export const fetchResults = async (query, page, signal) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&per_page=15&query=${query}&page=${page}`, { signal })
  return response.data
}