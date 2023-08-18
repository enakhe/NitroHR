import { Fragment } from "react"
import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import { typesOfCompany } from "../../app/objects";

const TypeOfCompanies = () => {
    return (
        <Fragment>
            <div className='relative bg-[#f6f8fc] isolate'>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
                <div className="w-full mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className=''>
                        <div className="max-w-screen-md mb-4 lg:mb-8">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Unlock your business&apos;s potential today</h2>
                            <p className="text-gray-800 sm:text-xl">Our software can be used for companies of all sizes and industries. From startups to enterprises, our versatile solutions adapt to your specific needs. Elevate your HR management with streamlined processes, accurate data insights, and compliance assurance. Whether you&apos;re aiming to enhance employee data management, attendance tracking, performance evaluation, or more, our services have you covered. Take the first step towards efficient HR operations and experience the difference in your business growth.</p>
                        </div>
                    </div>

                    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                        {
                            typesOfCompany.map((item, index) => (
                                <Card key={index} className="mt-6 w-80 shadow">
                                    <CardBody>
                                        <div key={index} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-primary2 group-hover:text-dark" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                    <div className="grid justify-items-center my-6">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-primary2 hover:ring-gray-900">
                            <a href="#" className="font-semibold text-center text-dark">
                                <span className="absolute inset-0 text-center" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TypeOfCompanies