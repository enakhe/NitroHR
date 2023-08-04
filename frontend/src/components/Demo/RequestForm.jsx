import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRequest, reset } from '../../features/Demo/demoSlice';
import { toast } from "react-toastify";
import Spiner from '../Utils/Spiner';
import { sizes } from "../../app/objects";
import Input from "../Utils/Input";
import Select from "../Utils/Select";
import TextArea from "../Utils/TextArea";


const RequestForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companySize: '',
        message: '',
    })

    const [errors, setErrors] = useState({});
    const { isError, isSuccess, detail, isLoading } = useSelector((state) => state.demo);
    const { firstName, lastName, email, phoneNumber, companyName, companySize, message } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(detail)
        }

        if (isSuccess) {
            toast.success("Successfully saved request!. Thank you, we'll get in touch")
            navigate('/')
        }

        dispatch(reset())
    }, [isError, detail, navigate, isSuccess, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(email) ? false : true;
        temp.firstName = firstName !== "" ? false : true;
        temp.lastName = lastName !== "" ? false : true;
        temp.phoneNumber = phoneNumber !== "" ? false : true;
        temp.companyName = companyName !== "" ? false : true;
        temp.companySize = companySize !== "" ? false : true;
        temp.message = message !== "" ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validate()
        const requestData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            companySize,
            message,
        }
        dispatch(createRequest(requestData));
    }

    return (
        <Fragment>
            <div className="relative isolate bg-white py-24 sm:py-32">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
                    <form onSubmit={onSubmit}>
                        <div className="mx-auto mt-16 max-w-2xl rounded-md ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                    <div>
                                        <Input type="text" name="firstName" value={firstName} onChange={onChange} placeholder="First name" error={errors.firstName} />
                                        <Input type="text" name="lastName" value={lastName} onChange={onChange} placeholder="Last name" error={errors.lastName} />
                                        <Input type="text" name="companyName" value={companyName} onChange={onChange} placeholder="Company name" error={errors.companyName} />
                                    </div>

                                    <div>
                                        <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" error={errors.email} />
                                        <Input type="text" name="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="Phone number" error={errors.phoneNumber} />
                                        <Select name="companySize" onChange={onChange} list={sizes} placeholder="Company size" dummyText="Enter company size" error={errors.companySize} />
                                    </div>
                                </div>
                                <TextArea name="message" onChange={onChange} value={message} error={errors.message} placeholder="Message" dummyText="Enter message here..." />
                                {
                                    isLoading ? <Spiner /> : (<div className="flex justify-center mt-4">
                                        <button type="submit" className="rounded-md hover:bg-gray-900 font-semibold text-white text-sm bg-secondary px-10 py-2.5">
                                            Send
                                        </button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RequestForm