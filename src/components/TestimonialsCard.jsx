import React from 'react'

const TestimonialsCard = ({
    name = 'John Doe',
    avatar = 'https://www.vciambulances.com/wp-content/uploads/2017/12/no-avatar.png',
    position = 'Lorem Ipsum',
    testimony = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget egestas augue. Praesent  tempus vulputate.'
}) => {
    return (
        <div className="items-start bg-gray-50 rounded-lg shadow sm:flex">
            <img className=" max-w-none sm:max-w-[200px] object-cover object-centers h-full w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={avatar} alt="User Avatar" />
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <p>{ name }</p>
                </h3>
                <span className="text-gray-500">{ position }</span>
                <p className="mt-3 mb-4 font-light text-gray-500">{ testimony }</p>
            </div>
        </div>
    )
}

export default TestimonialsCard