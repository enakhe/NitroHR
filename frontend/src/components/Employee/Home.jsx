import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton } from "@material-tailwind/react"
import { Fragment, useState } from "react"
import Datatable from "./Datatable"
import PropTypes from 'prop-types'
import { Modal } from "flowbite-react"
import CreateForm from "./CreateForm"

const Home = () => {
    const [openModal, setOpenModal] = useState("");
    const [email, setEmail] = useState("");
    const props = { openModal, setOpenModal, email, setEmail };

    return (
        <Fragment>
            <div className="lg:pt-20 lg:ml-80 pt-10">
                <div className="px-3">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold">Employee</h1>
                        <IconButton size="md" onClick={() => props.setOpenModal('dismissible')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </IconButton>
                    </div>
                </div>
                <Datatable />
                <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header>Add new employee data</Modal.Header>
                    <Modal.Body>
                        <CreateForm />
                    </Modal.Body>
                </Modal>
            </div>
        </Fragment>
    )
}


Home.propTypes = {
    setOpenModal: PropTypes.string.isRequired,
    openModal: PropTypes.array.isRequired
}

export default Home