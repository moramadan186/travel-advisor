import axios from 'axios';
export const getPlaces = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        }
        );
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const getWeather = async (lat, lon) => {
    try {
        const { data: { list } } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',
            {
                params: { lat, lon }
                , headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
                }
            }
        )
        return list;
    }
    catch (error) {
        console.log(error)
    }
}