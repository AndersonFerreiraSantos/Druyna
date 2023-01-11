import {Container, Icon, Text } from '../css/infoCity'

import Population from '../../../icons/population/population.json'

import Lottie from 'lottie-react'
const IconInfoCity = ({img, text}) => {
    return (
        <Container >
            <Lottie animationData={Population} />

            <Text>
                {text}
            </Text>
        </Container>
    )
}

export default IconInfoCity