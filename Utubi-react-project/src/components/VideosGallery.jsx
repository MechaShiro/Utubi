import '../css/videosGallery.css'

function VideosGallery({fullWidth , videos}){


    
       

        return(
                <>
                    <div className={fullWidth ? 'divTesteSquare' : 'divTesteSquare2'}>
                         
                    {videos.map((video) => (
                        <div className='card'> 
                                <img 
                                    className='card_thumbnail'
                                    src={video.snippet.thumbnails.high.url}></img> 
                                
                                <div className='card_footer'>
                                    <img 
                                        className='card_footer___profilePic'
                                        src={video.snippet.thumbnails.high.url}></img>
                                    <div className='card_footer___text'> 
                                        <p className='card_footer___text__title' >
                                            {video.snippet.description}
                                        </p>
                                        <p className='card_footer___text__channel'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <p className='card_footer___text__views'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
                    
                </>
        );
}

export default VideosGallery;