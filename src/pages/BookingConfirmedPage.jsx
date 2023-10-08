import React from 'react'
import { Footer, Header } from '../components';

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-48 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Reservation Success</h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Thank you for your reservation</p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">We have received your reservation and will be processing it shortly.</p>
              <div className="mt-10">
                <a href="/" className="text-base font-medium text-green-600 hover:text-green-500">Go back to homepage<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage