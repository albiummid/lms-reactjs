import { Input, Select } from 'antd'
import React, { useState } from 'react'
import TextEditor from '../../TextEditor/TextEditor'
import Drawer from '../../UI/Drawer'
import { FormGroup } from '../../UI/Form'
const statusOptions = ['Closed', 'Acknowledged', 'Understood']

export default function ReplyTread({ open, setOpen }) {
  const [details, setDetails] = useState('')
  const [images, setImages] = useState([])
  const [status, setStatus] = useState('')
  const { Option } = Select
  return (
    <Drawer title={'Reply'} onClose={() => setOpen(false)} open={open}>
      <FormGroup label={'Status'}>
        <Select className='w-[200px]' defaultValue={'Choose Status'}>
          {statusOptions.map((item, key) => (
            <Option value={item} key={key}>
              {item}
            </Option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup label={'Details'}>
        <TextEditor />
      </FormGroup>
      <FormGroup
        label={
          'Upload Images (Only jpg, png, JPG, JPEG, PNG files are allowed.)'
        }
      >
        <Input type='file' multiple />
      </FormGroup>
    </Drawer>
  )
}
