import React from 'react'
import styled from 'styled-components'



const Splitscreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}

export default Splitscreen


const Container = styled.div`
    display: flex
`

const Pane = styled.div`
    flex: ${props => props.weight}
`