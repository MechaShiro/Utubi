import '../css/videosGallery.css'

function VideosGallery({showSideMenu , 
                        videos , 
                        smallers}){

        return(
                <>
                    <div className={showSideMenu ? 'showSideMenu' : 'notShowSideMenu'}>
                        <h2 className='smallerH2' id='smallerH2'>Videos</h2>
                                <div className="cardsDisplay">
                                    {(showSideMenu ? videos.slice(0, 3) : videos).map((video) => (
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

                                <h2 className='smallerH2' id='smallerH2'>Smallers</h2>
                                <div className='smallersDisplay'>
                                    
                                    {(showSideMenu ? smallers.slice(0, 5) : smallers).map(video => (
                                        <div className='shortcard'>
                                            <img
                                                className='shortcard_thumbnail'
                                                    src={video.snippet.thumbnails.high.url}></img>
                                            <div key={video.id}>
                                            <p>{video.snippet.title}</p>
                                            </div>
                                        </div>
                                        
                                    ))}
                                </div>
                        </div>

                    
                    
                </>
        );
}

export default VideosGallery;