import '../css/blockType1.css'

function BlockType1(props){
        return(
                <button className="div_BlockType1" 
                    onClick={props.onClick} >
                    <img src={props.source}></img> 
                    <p>{props.title}</p> 
                </button>
        )
    };

export default BlockType1;