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

                        <div className='content'> card
                                <img className='content_img_testeTB'></img> card_thumbnail
                                
                                <div className='content__footer_teste'> card_footer
                                    <img className='profile_img_testeTB'></img> card_footer___profilePic
                                    <div className='paragraphs__content__footer_teste'> card_footer___text
                                        <p className='pGrande'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> card_footer___text__title
                                        <p className='pMedio'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <p className='pPequeno'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    
                </>
        )
    };

export default VideosGallery;