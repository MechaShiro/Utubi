import '../css/blockType1.css';
import '../css/blockType2.css'

function BlockType2(props){
    
        return(
                <>
                    <div className="div_BlockType1 div_BlockType2">
                        <div>
                            <img src={props.source}></img> <p>{props.title}</p>
                        </div>
                        <ul>
                            <li>batata</li>
                            <li>batata</li>
                            <li>batata</li>
                        </ul>
                    </div>
                </>
        )
    };

export default BlockType2;