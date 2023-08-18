import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'
import { Fragment } from 'react'

const Dropdown = ({name, list}) => {
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex focus:border-none focus:outline-none items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                {name}
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute bg-white left-1/2 z-10 mt-5 rounded-lg flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="p-3">
                        {
                            list.map((item, index) => (
                                <div key={index} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <a href={item.path} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">Testing</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}


Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

export default Dropdown