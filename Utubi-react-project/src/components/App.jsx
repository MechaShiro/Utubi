import { useEffect, useState } from 'react'

import '../css/style.css'
import '../css/videosGallery.css'

import Header from './pages/Home/Header'
import SideMenu from './SideMenu'
import VideosGallery from './VideosGallery'

import { fetchVideos } from '../api/youtube'
import { fetchSmallers } from '../api/youtube'
import { searchVideos } from '../api/youtube'

function App(){

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchVideos().then(setVideos);
    }, []);
    
    const [smallers, setSmallers] = useState([]);
    useEffect(() => {
        fetchSmallers().then(setSmallers);
    }, []);
    
    const[showSideMenu, setSideMenu] = useState(true);
    const handleSideMenu = () => (
        setSideMenu(!showSideMenu)
    );

    const [search , setSearch] = useState("")
    function handleSearchValue(e){
        setSearch(e.target.value)
        console.log(search)
    }

    return(
        <>
            <div>
                
                <Header  
                    handleSideMenu={ handleSideMenu}
                    search = {search}
                    searchVideos = {searchVideos}
                    handleSearchValue = {handleSearchValue}
                />
                
                <div className='div_body'>
                    {showSideMenu && 
                        <SideMenu/>
                    }
                    
                    <VideosGallery 
                        showSideMenu = {showSideMenu}
                        videos={videos}
                        smallers={smallers}
                    />
                </div>

            </div>
        </>
    )
}

export default App;
