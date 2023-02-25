import React from 'react'

export default function LiftingTwo(props) {
    return (
        <>
            <div className='Container1'>
                <div className='container'>
                    {props.params.firstName}


                </div>
                <div className='container'>
                    {props.params.lastName}
                </div>
            </div>

        </>

    )
}
