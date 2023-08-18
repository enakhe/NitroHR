import { Fragment } from 'react'
import PropTypes from 'prop-types'

const FeatureItem = ({ id, name, subTitle, desc, image, icon }) => {
    return (
        <Fragment>

            <div className="bg-white rounded-lg md:p-8" id={id} role="tabpanel" aria-labelledby={id + '-tab'}>
                <div className="overflow-hidden bg-white py-3 sm:py-3">
                    <div className="mx-auto max-w-7xl px-3 lg:px-8">
                        <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary2 lg:h-12 lg:w-12">
                                        {icon}
                                    </div>
                                    <h2 className="text-base font-semibold leading-7 text-primary2">{name}</h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{subTitle}</p>
                                    <p className="mt-6 text-gray-700 sm:text-xl">
                                        {desc}
                                    </p>
                                    <div className="hidden mt-10 sm:mb-8 sm:flex">
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-primary2 hover:ring-gray-900">
                                            <a href="#" className="font-semibold text-dark">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                Read more <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <img
                                src={image}
                                alt="Product screenshot"
                                className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

FeatureItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    icon: PropTypes.any.isRequired
}


export default FeatureItem