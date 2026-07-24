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
                                            {video.snippet.title}
                                        </p>
                                        <p className='card_footer___text__channel'>
                                            {video.snippet.channelTitle}
                                        </p>
                                        <p className='card_footer___text__views'>
                                            {video.statistics.viewCount} views</p>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
                    
                </>
        );
}

export default VideosGallery;