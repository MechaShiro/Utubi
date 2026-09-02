import '../css/sidemenu.css'

import home from '../imgs/icons/home_icon.svg';
import smallers from '../imgs/icons/smallers_icon.svg';
import mostpopular from '../imgs/icons/mostpopular_icon.svg';

import BlockType1 from './BlockType1';
import BlockType2 from './BlockType2';

    function SideMenu(){
        const goToTop = () => {
        document.getElementById("header")?.scrollIntoView( {behavior : "smooth"})
        }
        return(
                <>
                    <div className="div_SideMenu">
                        <ul className="ul_SideMenu">
                            <BlockType1  source = {home} title="Home" onClick ={goToTop}/>

                            <BlockType1  source = {smallers} title="Smallers"/>

                            <BlockType2 source = {mostpopular} title="Most Popular"/>
                        </ul>
                    </div>
                </>
        )
    };

export default SideMenu;