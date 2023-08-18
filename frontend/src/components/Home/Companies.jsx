import { Fragment } from "react"

const Companies = () => {
    return (
        <Fragment>
            <div className="bg-gray-900 lg:py-10 sm:py-20">
                <div className="mx-auto max-w-7xl py-6 px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-white">
                        Trusted by the world’s most innovative teams
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 animate-fade-right animate-once animate-delay-300">
                        <img
                            className="col-span-2 bg-white rounded-full max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 bg-white rounded-full max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 bg-white rounded-full max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 bg-white rounded-full max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 bg-white rounded-full col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
                <div className="hidden mt-10 sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-primary2 hover:ring-white">
                        Here&apos;s what our trusted companies are saying about us.{' '}
                        <a href="#" className="font-semibold text-white">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Companies