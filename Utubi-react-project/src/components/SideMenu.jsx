import '../css/sidemenu.css'

import home from '../imgs/icons/home_icon.svg';
import smallers from '../imgs/icons/smallers_icon.svg';
import mostpopular from '../imgs/icons/mostpopular_icon.svg';

import BlockType1 from './BlockType1';
import BlockType2 from './BlockType2';

    function SideMenu({setSearchResults ,
                        setSearch
    }){
        const goToTop = () => {
            document.getElementById("header")?.scrollIntoView( {behavior : "smooth"})
        }

        const goToSmallers = () => {
            document.getElementById("smallersDisplay")?.scrollIntoView( {behavior : "smooth"})
        }
        return(
                <>
                    <div className="div_SideMenu">
                        <ul className="ul_SideMenu">
                            <BlockType1  source = {home} title="Home" onClick = {() => {setSearchResults([]) ;  window.scrollTo({top: 0,}) ; setSearch("")}}/>

                            <BlockType1  source = {smallers} title="Smallers" onClick = {goToSmallers}/>

                            <BlockType2 source = {mostpopular} title="Most Popular"/>
                        </ul>
                    </div>
                </>
        )
    };

export default SideMenu;