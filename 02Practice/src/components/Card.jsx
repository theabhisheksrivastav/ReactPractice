import React from 'react'

export const Card = (props) => {
        const {prname, para} = props
    
    return (
    <>
        <div>
            <div className="bg-amber-300 w-64 p-12 m-6 h-64 flex flex-col justify-center items-center rounded-3xl">
                <h1 className="text-2xl">{prname}</h1>
                <p className="text-lg">{para}</p>
            </div>
        </div>
    </>
    )
}