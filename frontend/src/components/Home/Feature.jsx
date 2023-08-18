import { Fragment, useState } from 'react'
import FeatureItem from './FeatureItem'
import { employeeDataManagement } from '../../app/objects'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const Feature = () => {
    const [activeTab, setActiveTab] = useState("Employee Data Management");
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Fragment>
            <div
                className='bg-[#f6f8fc]'>
                <div className="w-full mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className=''>
                        <div className="max-w-screen-md mb-4 lg:mb-8">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed to fit your business size</h2>
                            <p className="text-gray-800 sm:text-xl">Our range of services caters to your unique needs. Whether you&apos;re a small startup or a large corporation, our software solutions adapt seamlessly to streamline your HR processes. From employee data management to leave tracking, performance evaluation, and more – we&apos;ve got you covered. Discover how our tailored services can elevate your HR management today.</p>
                        </div>
                        <div className="hidden lg:block">
                            <Tabs id="custom-animation" value={activeTab}>
                                <TabsHeader style={{ color: "#fff" }} className='bg-transparent' indicatorProps={{
                                    className:
                                        "bg-primary2 shadow-none rounded-full",
                                }}>
                                    {
                                        <div className='flex grid justify-items-center grid grid-cols-4 flex-wrap text-sm font-medium text-center'>
                                            {
                                                employeeDataManagement.map((item, index) => (
                                                    <Tab key={index} value={item.title} onClick={() => setActiveTab(item.title)}>
                                                        <button className="inline-block px-4 py-3.5 text-gray-600 bg-tertiary rounded-full hover:bg-primary2 hover:text-white">
                                                            {item.title}
                                                        </button>
                                                    </Tab>
                                                ))
                                            }
                                        </div>
                                    }
                                </TabsHeader>
                                <TabsBody animate={{
                                    initial: { y: 250 },
                                    mount: { y: 0 },
                                    unmount: { y: 250 },
                                }}>
                                    {
                                        employeeDataManagement.map((item, index) => (
                                            <TabPanel key={index} value={item.title}>
                                                <FeatureItem key={index} id={item.id} name={item.title} icon={<item.icon className="h-12 w-12 text-white p-2 group-hover:text-indigo-600" aria-hidden="true" />} subTitle={item.subTitle} desc={item.desc} image={item.image} />
                                            </TabPanel>

                                        ))
                                    }
                                </TabsBody>
                            </Tabs>
                        </div>
                        <div className='lg:hidden'>
                            {
                                employeeDataManagement.map((item, index) => (
                                    <Accordion key={index} className='my-5' open={open === item.idNo} icon={<Icon id={item.idNo} open={open} />}>
                                        <AccordionHeader className='text-lg text-gray-700 font-semibold font' onClick={() => handleOpen(item.idNo)}>{item.title}</AccordionHeader>
                                        <AccordionBody>
                                            <FeatureItem key={index} id={item.id} name={item.title} icon={<item.icon className="h-12 w-12 font text-white p-2 group-hover:text-indigo-600" aria-hidden="true" />} subTitle={item.subTitle} desc={item.desc} image={item.image} />
                                        </AccordionBody>
                                    </Accordion>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Icon.propTypes = {
    id: PropTypes.number.isRequired,
    open: PropTypes.number.isRequired
}

export default Feature