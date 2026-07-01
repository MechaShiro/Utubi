import '../css/visibilitybutton.css'

function  VisibilityButton({showPassword, 
                            setShowPassword , 
                            visibilityOn , 
                            visibilityOff}){
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
                    src={showPassword ? visibilityOff : visibilityOn}
                    alt="Password visible"/>
                        </button>
            </div>
        </>
    )
}

export default VisibilityButton ;