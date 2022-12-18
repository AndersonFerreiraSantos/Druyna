import { Button, Flat, Component } from './button-header-style'

const ComponentButtonHeader = ({onClick, textName, }) => {
    return (
        <Component>
            <Button onClick={onClick}>{textName}</Button>

            <Flat />

        </Component>
    )
}

export default ComponentButtonHeader