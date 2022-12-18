import '../css/Header.css'

import METADATA from '../metadata/header-metadata'

import C_ButtonHeader from '../../../components/button-header/button-header'

const Header = () => {
    return (
        <div className = 'Header'>
            <div className = 'body'>

                <div className = 'div_all_patterns_buttons'>
                    {METADATA.PATTERN.map((item) => {
                        return (
                            <div className='div_buttons_patterns'>
                                <C_ButtonHeader 
                                textName = {item.textName}
                                onClick={item.onClick} /> 
                            </div>
                        )
                    })}
                </div>

                <div className = 'div_all_user_buttons'>
                    {METADATA.USER.map((item) => {
                        return (
                            <div className='div_buttons_user'>
                                <C_ButtonHeader 
                                textName = {item.textName}
                                onClick={item.onClick} /> 
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Header