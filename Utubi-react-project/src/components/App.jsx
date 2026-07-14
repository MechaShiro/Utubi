import { useEffect, useState } from 'react'

import '../css/style.css'
import '../css/videosGallery.css'

import Header from './pages/Home/Header'
import SideMenu from './SideMenu'
import VideosGallery from './VideosGallery'

import { fetchVideos } from '../api/youtube'

function App(){


    const[showSideMenu, setSideMenu] = useState(true);

    const handleSideMenu = () => (
        setSideMenu(!showSideMenu)
    );


    return(
        <>
            <div>
                
                <Header  
                    handleSideMenu={ handleSideMenu}
                />
                <div className='div_body'>
                    {showSideMenu && 
                        <SideMenu/>
                    }

                    <VideosGallery 
                        fullWidth = {showSideMenu}
                    />
                </div>
            </div>
        </>
    )
}

export default App;
