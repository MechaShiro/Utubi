const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchVideos() {

    try{
        const response = await fetch(`${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=5&regionCode=PT&key=${API_KEY}`);

        if (!response.ok) {
            throw new Error("Erro ao obter os vídeos populares.");
        }

        const data = await response.json();

        console.log(data);
        return data.items;
    }
    catch(error){
        console.log(error);
    }
    
}

