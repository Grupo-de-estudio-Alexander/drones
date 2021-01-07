import React from 'react'

import './styles/Layout.css'

export default function layout(props) {
    return (
        <React.Fragment>
            <div className='fondo'/>
            {props.children}
        </React.Fragment>
    )
}