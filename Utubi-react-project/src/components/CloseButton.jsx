import '../css/closebutton.css'

function  CloseButton({handleToggle}){
    return(
        <>
            <div>
                <button type="button" className ="btn_close" onClick={handleToggle}> <img src="./src/imgs/icons/close_icon.svg" alt="GoBackIcon"></img></button>
            </div>
        </>
    )
}

export default CloseButton ;