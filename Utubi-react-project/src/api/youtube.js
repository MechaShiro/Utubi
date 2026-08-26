const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchVideos() {

    try{
        const response = await fetch(`${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=4&regionCode=PT&key=${API_KEY}`);

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

export async function fetchSmallers(){

    try{
        const tags = [
            "shorts",
            "viral",
            "trending",
            "reels",
            "fyp"
        ];

        const randomTag = tags[Math.floor(Math.random() * tags.length)];

        const response = await fetch(`${BASE_URL}/search?part=snippet&type=video&maxResults=50&q=${randomTag}&regionCode=US&key=${API_KEY}`
);
        const data = await response.json();

         // Obter os IDs
        const ids = data.items.map(video => video.id.videoId).join(",");

         // 2ª chamada: obter estatísticas e duração
        const response2 = await fetch(
            `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${ids}&key=${API_KEY}`
        );
        const videos = await response2.json();
        
        function durationToSeconds(duration) {
        const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

        const hours = parseInt(match?.[1] || 0);
        const minutes = parseInt(match?.[2] || 0);
        const seconds = parseInt(match?.[3] || 0);

        return hours * 3600 + minutes * 60 + seconds;
        }

        const smallers = videos.items.filter(video => durationToSeconds(video.contentDetails.duration) <= 60).slice(0, 6);
        console.log(smallers);
        return smallers;

        
    }
    catch(error){
        console.log(error);
    }
}

export async function searchVideos(params) {

    try {
        const response = await fetch(
            `${BASE_URL}/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(params)}&regionCode=PT&key=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Erro ao pesquisar videos");
        }

        const data = await response.json();

        console.log(data);
        return data.items
    }

    catch(error){
        console.log(error)
    }
}


