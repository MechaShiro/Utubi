import '../css/closebutton.css'

function  CloseRgtMenus({closeRgtMenus}){
    return(
        <>
            <div>
                <button type="button" className ="btn_closeRgtMenus" onClick={closeRgtMenus}> <img src="./src/imgs/icons/close_icon.svg" alt="GoBackIcon"></img></button>
            </div>
        </>
    )
}

export default CloseRgtMenus ;