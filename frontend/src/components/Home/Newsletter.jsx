import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const Newsletter = () => {
    return (
        <Fragment>
            <div className="relative isolate overflow-hidden bg-[#f6f8fc] py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Subscribe to our newsletter</h2>
                            <p className="mt-4 text-gray-800 sm:text-xl">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                dolore.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded border-dark bg-white/5 px-4 py-3.5 text-white shadow-sm ring-2 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary2 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="rounded hover:bg-primary-hover font-semibold text-white text-sm bg-primary2 px-4 py-3.5">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-primary2" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-gray-900">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-700 sm:text-xl">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-primary2" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-gray-900">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-700 sm:text-xl">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
            </div>
        </Fragment>
    )
}

export default Newsletter;