import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export async function getPlaces(sw, ne) {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                //'dbcdddfc73msh73e5f87412b7ac5p1e3db7jsn9ca9694b12f1'
                'X-RapidAPI-Key': 'e5cd26a157msha528eceec3b8658p15b212jsn721ac0275b3c',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        }
        );
        return data;
    } catch (error) {
        console.log(error)
    }
}