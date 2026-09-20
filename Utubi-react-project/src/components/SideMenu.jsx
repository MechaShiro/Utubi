import '../css/sidemenu.css'

import home from '../imgs/icons/home_icon.svg';
import homeAlt from '../imgs/icons/home_icon_azulEscuro.svg';
import smallers from '../imgs/icons/smallers_icon.svg';
import smallersAlt from '../imgs/icons/smallers_icon_azulEscuro.svg';
import mostpopular from '../imgs/icons/mostpopular_icon.svg';

import BlockType1 from './BlockType1';
import BlockType2 from './BlockType2';

    function SideMenu({setSearchResults ,
                        setSearch,
                        showSideMenu,
                        setVideoPlaying
    }){
        const goToTop = () => {
            document.getElementById("header")?.scrollIntoView( {behavior : "smooth"})
        }

        const goToSmallers = () => {
            document.getElementById("smallersDisplay")?.scrollIntoView( {behavior : "smooth"})
        }
        return(
                <>
                    <div className={showSideMenu? "div_SideMenu" : "div_SideMenuF"}>
                        <ul className={showSideMenu? "ul_SideMenu" : "ul_SideMenuF"}>
                            <BlockType1 showSideMenu={showSideMenu}  
                                        source = {showSideMenu? homeAlt : home}
                                        title={showSideMenu? "Home" : ""} 
                                        onClick = {() => {  setSearchResults([]) ;  
                                                            window.scrollTo({top: 0,}) ; 
                                                            setVideoPlaying("")}}/>

                            <BlockType1 showSideMenu={showSideMenu} 
                                        source = {showSideMenu? smallersAlt : smallers} 
                                        title={showSideMenu? "Smallers" : ""}
                                        onClick = {goToSmallers}/>


                        </ul>
                    </div>
                </>
        )
    };

export default SideMenu;