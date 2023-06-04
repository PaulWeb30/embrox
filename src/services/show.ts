import axios from 'axios'
import { Root, Show } from '../@types/show'
const API_URL = 'https://api.tvmaze.com'

const ShowApi = {
	searchShows: async (query: string) => {
		const { data } = await axios.get<Root[]>(API_URL + `/search/shows?q=${query}`)
		return data
	},
	getShow: async (showId: string | undefined) => {
		const { data } = await axios.get<Show>(API_URL + `/shows/${showId}`)
		return data
	},
}

export default ShowApi
