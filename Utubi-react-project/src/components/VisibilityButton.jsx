import '../css/visibilitybutton.css'

function  VisibilityButton({handleVisibility , visibilityOn , visibilityOff , visibility}){
    return(
        <>
            <div>
                <button type="button" className ="btn_visibility" onClick={handleVisibility}> <img src= {visibility ? visibilityOn : visibilityOff} ></img></button>
            </div>
        </>
    )
}

export default VisibilityButton ;