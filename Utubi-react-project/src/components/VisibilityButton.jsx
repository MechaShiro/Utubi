

function  VisibilityButton({handleVisibility}){
    return(
        <>
            <div>
                <button type="button" className ="btn_visibility" onClick={handleVisibility}> <img src="../imgs/icons/visibility_icon.svg" ></img></button>
            </div>
        </>
    )
}

export default VisibilityButton ;