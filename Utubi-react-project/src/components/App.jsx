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

    //SearchBar
    const [search , setSearch] = useState("");
    const [h2search , setH2Search] = useState("");
    const[searchResults , setSearchResults] = useState([]);
    const handleSearchValue = async (e) => {
        setSearch(e.target.value)
    };
    const handleSearchResults = async (e) =>{
        console.log("PESQUISA FOI CHAMADA");
        e.preventDefault();
        setH2Search(search);
        if(search.trim() === ""){
            setSearchResults([]);
            return;
        }

        const results = await searchVideos(search);
        setSearchResults(results)
        console.log(results)
        
    }
    

    return(
        
        <>
            <div>
                
                <Header  
                    handleSideMenu={ handleSideMenu}
                    search = {search}
                    searchVideos = {searchVideos}
                    handleSearchValue = {handleSearchValue}
                    handleSearchResults = {handleSearchResults}
                />
                
                <div className='div_body'>
                    {showSideMenu && 
                        <SideMenu/>
                    }
                    
                    <VideosGallery 
                        showSideMenu = {showSideMenu}
                        videos={videos}
                        smallers={smallers}
                        search = {search}
                        searchVideos = {searchVideos }
                        handleSearchResults = {handleSearchResults}
                        setSearchResults = {setSearchResults}
                        searchResults = {searchResults}
                        h2search = {h2search}
                    />
                </div>

            </div>
        </>
    )
}

export default App;
