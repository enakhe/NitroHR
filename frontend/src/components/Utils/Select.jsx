import { Fragment } from "react"
import PropTypes from 'prop-types'

const Select = ({name, onChange, list, error, placeholder, dummyText}) => {
    return (
        <Fragment>
            <label htmlFor={name} className="block mt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    {placeholder}
                </span>
                <select
                    id={name}
                    name={name}
                    onChange={onChange}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1">
                    <option defaultValue>{dummyText}</option>
                    {
                        list.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
                {
                    error === true ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid {placeholder} field!
                    </span> : ""
                }

            </label>
        </Fragment>
    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    dummyText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.any
}

export default Select