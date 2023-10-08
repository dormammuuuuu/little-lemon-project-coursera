import React from 'react'
import { TestimonialsCard } from '../components'

const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Testimonies</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Explore the heartfelt words of our satisfied customers – a testament to the Little Lemon Restaurant experience. </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <TestimonialsCard name="Sarah Johnson" position="Marketing Manager" avatar="https://th.bing.com/th/id/OIP.Q_vZZcSYOaPMcxnXMQQ99QHaE8?pid=ImgDet&rs=1" testimony="I stumbled upon Little Lemon Restaurant by chance, and it turned out to be one of the best discoveries I've ever made."/>
                    <TestimonialsCard name="Mark Thompson" position="Food Critic" avatar="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" testimony="The lemon-marinated grilled chicken at Little Lemon Restaurant is a flavor explosion in every bite!"/>
                    <TestimonialsCard name="Jordan Davis" position="Local Food Blogger" avatar="https://th.bing.com/th/id/OIP.kXpCREg8oMvkGoLWoea-xgHaFN?pid=ImgDet&rs=1" testimony="Little Lemon Restaurant is a hidden gem in our town."/>
                    <TestimonialsCard name="Vanessa Miller" position="Restaurant Enthusiast" avatar="https://mir-s3-cdn-cf.behance.net/user/276/c5683f210344559.5d9d056e6630e.jpg" testimony="Little Lemon is my top choice for dining in town."/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials