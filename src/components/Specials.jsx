import React from 'react'
import { SpecialsCard } from '../components'
const Specials = () => {
    return (
        <section id='specials' className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Specials</h2>
                    <p className="font-light text-gray-500 sm:text-xl ">Discover Little Lemon's Specials – a celebration of fresh, seasonal ingredients and unique flavors. From lemon-grilled seafood to innovative vegetarian dishes, our specials menu is a zestful culinary adventure you won't want to miss.</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                     <SpecialsCard name="Lemon-Grilled Salmon" price="18.99" thumb="https://bing.com/th?id=OSK.4ebd8f7e20432f9f445df2e6f01e6eaf"/>
                     <SpecialsCard name="Citrus Shrimp Pasta" price="17.49" thumb="https://bing.com/th?id=OSK.c14f1f7329f9bb9f01277b1b4f7bce5a"/>
                     <SpecialsCard name="Meyer Lemon Chicken" price="16.99" thumb="https://bing.com/th?id=OSK.b55acd0cfee4171ac367cb4990f98234"/>
                     <SpecialsCard name="Lemon Herb Risotto" price="14.99" thumb="https://bing.com/th?id=OSK.ee2506b4217e26580074d84e6676a432"/>
                     <SpecialsCard name="Lemon Caprese Salad" price="11.49" thumb="https://bing.com/th?id=OSK.aea1e91bff6bf506b8d7181ddd66d755"/>
                     <SpecialsCard name="Lemon Veggie Stir-Fry" price="15.99" thumb="https://bing.com/th?id=OSK.0dd10ea70be5454095c7f86564563b40"/>
                     <SpecialsCard name="Lemon Butter Cake" price="7.99" thumb="https://bing.com/th?id=OSK.0a82e62f97e1e2a46453444a1f06c45a"/>
                     <SpecialsCard name="Lemon Sorbet" price="4.99" thumb="https://bing.com/th?id=OSK.6f7f8f7149824b4099016db38edc2aab"/>
                </div>
            </div>
        </section>
    )
}

export default Specials
