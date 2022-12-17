import '../css/Header.css'

import METADATA from '../metadata/header-metadata'

import C_ButtonHeader from '../../../components/button-header/button-header'

const Header = () => {
    return (
        <div className = 'Header'>
           <div className = 'div_buttons'>

            {METADATA.PATTERN.map((item) => {
                
                return (
                    <div >
                        <C_ButtonHeader 
                        textName = {item.textName}
                        onClick={item.onClick} /> 
                    </div>
                )

            })}

           </div>
        </div>
    )
}

export default Header