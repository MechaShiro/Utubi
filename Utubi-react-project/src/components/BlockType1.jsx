import '../css/blockType1.css'

function BlockType1(props){
        return(
                <button className={props.showSideMenu?"div_BlockType1" : "div_BlockType1_False"}        
                    onClick={props.onClick} >
                    <img src={props.source}></img> 
                    <p>{props.title}</p> 
                </button>
        )
    };

export default BlockType1;