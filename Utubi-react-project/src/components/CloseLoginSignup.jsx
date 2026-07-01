function  CloseLoginSignUp({loginState}){
    return(
        <>
            <div>
                <button type="button" className ="btn_closeLoginSignUp" onClick={loginState}> <img src="./src/imgs/icons/close_icon.svg" alt="GoBackIcon"></img></button>
            </div>
        </>
    )
}

export default CloseLoginSignUp ;