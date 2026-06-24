import '../css/gobackbutton.css'

function  GoBackButton({handleGoBack}){
    return(
        <>
            <div>
                <button type="button" className ="btn_goback" onClick={handleGoBack}> <img src="./src/imgs/icons/goback_icon.svg" alt="GoBackIcon"></img></button>
            </div>
        </>
    )
}

export default GoBackButton ;