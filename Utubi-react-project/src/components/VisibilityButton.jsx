import '../css/visibilitybutton.css'

function  VisibilityButton({showPassword, 
                            setShowPassword , 
                            visibilityOn , 
                            visibilityOff}){

                                console.log(showPassword);
    return(
        <>
            <div>
                <button 
                        type="button" 
                        className ="btn_visibility"
                        onClick = {() => {
                            setShowPassword(prev => !prev)
                        }}>
                <img
                    src={visibilityOff}
                    alt="Password visible"/>
                        </button>
            </div>
        </>
    )
}

export default VisibilityButton ;