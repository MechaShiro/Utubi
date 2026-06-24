import '../css/blockType1.css'

function BlockType1(props){
        return(
                <>
                    <div className="div_BlockType1">
                        <img src={props.source}></img> <p>{props.title}</p>
                    </div>
                </>
        )
    };

export default BlockType1;