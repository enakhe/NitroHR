import { Fragment } from 'react'
import PropTypes from 'prop-types'

const FeatureItem = ({ name, subTitle, desc, list, image, icon}) => {
    return (
        <Fragment>
            <div className="overflow-hidden bg-white py-10 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                {icon}
                                <h2 className="text-base font-semibold leading-7 text-primary">{name}</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{subTitle}</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {desc}
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {list.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-md text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                                                {feature.name} :
                                            </dt>{' '}
                                            <dd className="inline text-gray-600">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src={image}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

FeatureItem.propTypes = {
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    list: PropTypes.array.isRequired
}


export default FeatureItem