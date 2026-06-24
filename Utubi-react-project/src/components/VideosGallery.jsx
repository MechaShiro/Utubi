import '../css/videosGallery.css'

function VideosGallery({fullWidth}){

    async function fetchData () {
        try{ 
            const response = await fetch ("https://pokeapi.co/api/v2/pokemon");

            if(!response.ok){
                throw new Error("Could not fetch resource")
            }

            const data = await response.json();
            console.log(data)
        }
        catch(error){
            console.error(error)
        }
    }
       

        return(
                <>
                    <div className={fullWidth ? 'divTesteSquare' : 'divTesteSquare2'}>
                        <h1>OI</h1>
                    </div>
                </>
        )
    };

export default VideosGallery;