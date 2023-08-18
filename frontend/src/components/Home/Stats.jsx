import { Fragment } from "react"
import { stats } from "../../app/objects"

const Stats = () => {
    return (
        <Fragment>
            <div className="bg-[#f6f8fc] lg:py-12 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=''>
                        <div className="max-w-screen-md mb-4 lg:mb-8">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our track record</h2>
                            <p className="text-gray-500 sm:text-xl">Discover our impressive track record of transforming HR operations. With a proven history of empowering businesses, our software has enhanced efficiency, compliance, and growth. Join the ranks of satisfied clients who have experienced seamless employee data management, streamlined leave tracking, efficient payroll processes, and more.</p>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Fragment>
    )
}

export default Stats