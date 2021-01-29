import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import PlayerForm from './player_form'

const AddPlayer = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleSubmit = (values) => {
        setIsModalVisible(false)
        props.onAdd(values.player, values.amount)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onClear = () => {
        props.onClear()
    }

    return (
        <div>
            <Button style={{margin: '20px'}} type="primary" onClick={showModal}>
               Add Player
            </Button>
            <Button type="secondary" onClick={onClear}>
               Clear Game
            </Button>
            <Modal footer={null} title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
                <PlayerForm onSubmit={handleSubmit} />
            </Modal>
        </div>
    )
}

export default AddPlayer