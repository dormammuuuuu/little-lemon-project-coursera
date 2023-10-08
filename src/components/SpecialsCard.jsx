import React from 'react'

const SpecialsCard = ({
    name, price, thumb
}) => {
    return (
        <div className="text-center text-gray-500 ">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-center" src={thumb} alt="Thumbnail" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                <p>{ name }</p>
            </h3>
            <p>${ price }</p>
        </div>
    )
}

export default SpecialsCard