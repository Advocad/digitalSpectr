import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Modal, Input, Select, Button } from 'antd';

const { Option } = Select;

const CreateModal = ({handleSubmit, todos}) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [textForm, setTextForm] = useState(null)
  const [select, setSelect] = useState(null)

  const handleCancel = () => {
    setVisibleModal(false)
  }

  const handleFormChange = e => {
    setTextForm(e.target.value)
  }

  const showModal = () => {
    setVisibleModal(true)
  }

  const handleSelect = value => {
    setSelect(value)
  }

  const handleOk = () => {
    const data = {
      id: uuidv4(),
      text:textForm,
      complete: false
    }

    handleSubmit(data, select)
  }

  return(
    <div>
      <Button onClick={showModal} type="primary">Добавить запись</Button>
      <Modal
        title="Добавить запись"
        visible={visibleModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select onChange={handleSelect} defaultValue="Главная" style={{ width: '100%', marginBottom: 10 }}>
          <Option key={uuidv4()} value="Главная">Главная</Option>
          {todos.map(todo => <Option key={todo.id}>{todo.text}</Option>)}
        </Select>
        <Input placeholder="Текст задачи" onChange={handleFormChange} />
      </Modal>
    </div>
  )

} 

export default CreateModal;