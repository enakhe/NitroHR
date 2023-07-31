import { Fragment } from "react"

const sizes = [
    "less than 10",
    "10 - 30",
    "31 - 50",
    "51 - 100",
    "101 - 500",
    "501 - 1,000",
    "1,001 - 5,000",
    "5,001 - 30",
    "more than 10,000",
]

const RequestForm = () => {
    return (
        <Fragment>
            <div className="relative isolate bg-white py-24 sm:py-32">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }} />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request a demo today and see for yourself!</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                            in. Explicabo id ut laborum.
                        </p>
                    </div>
                    <form>
                        <div className="mx-auto mt-16 max-w-2xl rounded-md ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="block">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                First name
                                            </span>
                                            <input type="text" name="firstName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First name" />
                                        </label>

                                        <label className="block mt-4">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Last name
                                            </span>
                                            <input type="text" name="lastName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Last name" />
                                        </label>

                                        <label className="block mt-4">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Company name
                                            </span>
                                            <input type="text" name="companyName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Company name" />
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Email
                                            </span>
                                            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                                        </label>

                                        <label className="block mt-4">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Phone number
                                            </span>
                                            <input type="text" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Phone number" />
                                        </label>

                                        <label htmlFor="companySize" className="block mt-4">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Company size
                                            </span>
                                            <select id="companySize" name="companySize" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1">
                                                <option selected>Choose company size</option>
                                                {
                                                    sizes.map((size) => (
                                                        <option key={size} value={size}>{size}</option>
                                                    ))
                                                }
                                            </select>
                                        </label>
                                    </div>

                                </div>

                                <label htmlFor="message" className="block mt-4">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Message
                                    </span>
                                    <textarea id="message" name="message" rows="4" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Write your message here..."></textarea>
                                </label>

                                <div className="flex justify-center mt-4">
                                    <button className="rounded-md hover:bg-gray-900 font-semibold text-white text-sm bg-secondary px-10 py-2.5">
                                        Send
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RequestForm