import './button-header.css'

const C_ButtonHeader = ({onClick, textName, }) => {
    return (
        <div>
            <button className = 'button' onClick={onClick}>{textName}</button>
        </div>
    )
}

export default C_ButtonHeader