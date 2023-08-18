import { navigation } from '../../app/objects';
import whiteLogo from '../../assets/dark-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (

        <footer className="bg-gray-900 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img
                                className="h-10 w-auto"
                                src={whiteLogo}
                                alt="Nitro HR logo" />
                        </a>
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
                                className="min-w-0 flex-auto rounded border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary2 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="rounded hover:bg-primary-hover font-semibold text-white text-sm bg-primary2 px-4 py-3.5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Products</h2>
                            <ul className="text-gray-500">
                                {
                                    navigation[0].items.map((item, index) => (
                                        <li key={index} className="mb-4">
                                            <a href={item.path} className="text-gray-300 font-light hover:underline">{item.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="text-gray-300 font-light hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 font-light hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">NitroHR™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer