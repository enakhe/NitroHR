import { Fragment, useEffect, useState } from "react";
import logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from "../../features/auth/userApiSlice";
import { setCredentials } from '../../features/auth/authSlice';
import { toast } from "react-toastify";
import Spiner from "../Utils/Spiner";

const Form = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const { userName, password } = formData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading, isSuccess }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            if (isSuccess) {
                toast.success(`Successfully logged in.`);
                navigate('/dashboard');
            }
        }
    }, [navigate, userInfo, isSuccess]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        let temp = {};
        temp.userName = userName !== "" ? false : true;
        temp.password = password !== "" ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        validate()
        try {
            const loginData = {
                userName, password
            };
            const res = await login(loginData).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/dashboard');
        } catch (err) {
            let error = err.error || err.data.detail;
            toast.error(error)
        }
    }

    return (
        <Fragment>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link to="/">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={logo}
                            alt="Nitro HR"
                        />
                    </Link>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                User name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    autoComplete="userName"
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                                {
                                    errors.userName === true ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                        Invalid User name field !
                                    </span> : ""
                                }
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={onChange}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                                {
                                    errors.password === true ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                        Invalid password field !
                                    </span> : ""
                                }
                            </div>
                        </div>

                        <div>
                            {
                                isLoading ? <Spiner /> : (<div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-primary2 px-4 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                        Sign in
                                    </button>
                                </div>)
                            }

                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Form