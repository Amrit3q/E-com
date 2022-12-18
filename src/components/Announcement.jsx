import React from 'react'
import styled from 'styled-components'

const Contain = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Contain>
            !!Super DEAL!!
        </Contain>
    )
}

export default Announcement