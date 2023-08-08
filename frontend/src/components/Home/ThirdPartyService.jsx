import { Fragment } from "react"
import CardLink from "../Utils/CardLink"
import { CalendarIcon } from '@heroicons/react/24/solid';

const ThirdPartyService = () => {
    return (
        <Fragment>
            <div className="">
                <div className="lg:py-10 mx-auto max-w-6xl sm:py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
                            <div>
                                <CardLink title="Weekly Online Conference" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor hic aliquid ratione quis porro ex sit praesentium itaque doloribus" link="/conference" linkText="Register" icon={CalendarIcon} />
                            </div>

                            <div className="mt-5">
                                <CardLink title="Weekly Online Conference" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor hic aliquid ratione quis porro ex sit praesentium itaque doloribus" link="/conference" linkText="Register" icon={CalendarIcon} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ThirdPartyService