import { Fragment } from 'react'
import FeatureItem from './FeatureItem'
import { employeeDataManagement } from '../../app/objects'

const Feature = () => {
    return (
        <Fragment>
            {
                employeeDataManagement.map((item, index) => (
                    <div key = { index }>
                        <FeatureItem name={item.title} icon={<item.icon className="h-12 w-12 text-primary group-hover:text-indigo-600" aria-hidden="true" />} subTitle={item.subTitle} desc={item.desc} image={item.image} list={item.item} />
                    </div>
                ))
            }
        </Fragment>
    )
}

export default Feature