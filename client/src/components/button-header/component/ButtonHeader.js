import { Button } from '../css/ButtonHeader'

const ButtonHeader = ({onClick, textName, }) => {
    return (
        <div>
            <Button onClick={onClick}>{textName}</Button>
        </div>
    )
}

export default ButtonHeader