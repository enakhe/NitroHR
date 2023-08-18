import { Fragment } from "react"
import { testimony } from "../../app/objects"
import { Carousel } from "@material-tailwind/react";

const Testimonials = () => {
    return (
        <Fragment>
            <div className='bg-[#f6f8fc] relative bg-[#f6f8fc] isolate'>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
                <div className="w-full mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className=''>
                        <div className="max-w-screen-md mb-4 lg:mb-8">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our client&apos;s story</h2>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-3">
                        <Carousel prevArrow={() => ''} nextArrow={() => ''} navigation={() => ''} autoplayDelay={5000} transition={{ duration: 2 }} loop autoplay className="rounded-xl">
                            {
                                testimony.map((item, index) => (
                                    <div key={index} className="grid items-center gap-3 grid-cols-1 lg:grid-cols-3">
                                        <img
                                            className="h-96 w-96 rounded-lg object-cover object-center"
                                            src={item.image}
                                            alt="nature image" />
                                        <figure className="col-span-2">
                                            <svg className="h-12 mx-auto mb-3 text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                            </svg>
                                            <blockquote>
                                                <p className="lg:text-2xl font-medium text-white sm:text-xl">{item.para}</p>
                                            </blockquote>
                                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                                <img className="w-6 h-6 rounded-full" src={item.image} alt="profile picture" />
                                                <div className="flex items-center divide-x-2 divide-gray-700">
                                                    <div className="pr-3 font-medium text-white">{item.ceoName}</div>
                                                    <div className="pl-3 text-sm font-light text-gray-400">CEO at {item.companyName} </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonials