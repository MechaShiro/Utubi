import { useEffect, useState } from 'react'

import '../css/style.css'
import '../css/videosGallery.css'

import Header from './pages/Home/Header'
import SideMenu from './SideMenu'
import VideosGallery from './VideosGallery'

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

                {showSideMenu && 
                    <SideMenu/>
                }

                <VideosGallery 
                    fullWidth = {showSideMenu}
                />
            </div>
        </>
    )
}

export default App;
