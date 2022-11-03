import { Button, Dropdown, Input, Menu } from 'antd'
import React, { useState } from 'react'
import useScreenWidth from '../../../hooks/useScreenWidth'
import Drawer from '../../UI/Drawer'
import { FormGroup } from '../../UI/Form'
import Editor from '../../CKEditor'
import TextEditor from '../../TextEditor/TextEditor'

export default function OpenNewTicket({ openDrawer, setOpenDrawer }) {
  const supportKinds = [
    'Problem Solving',
    'Assignment',
    'Purchase',
    'LMS Feature',
    'Other',
  ]
  const [selectedKind, setSelectedKind] = useState('Choose Support Kind')

  return (
    <Drawer
      title='Open A New Ticket'
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <FormGroup label={'Support Kind'}>
        <Dropdown
          icon={null}
          overlay={
            <Menu
              onClick={(e) => {
                setSelectedKind(supportKinds[e.key])
              }}
              items={supportKinds.map((item, key) => {
                return {
                  ...item,
                  key,
                  label: item,
                }
              })}
            />
          }
        >
          <Button className='w-full' variant={'blue'}>
            {selectedKind}
          </Button>
        </Dropdown>
      </FormGroup>

      <FormGroup label={'Title'}>
        <Input type='text' />
      </FormGroup>
      <FormGroup className={''} label={'Details'}>
        <TextEditor />
      </FormGroup>

      <FormGroup
        label={`Upload Images (Only jpg, png, JPG, JPEG, PNG files are allowed.)`}
      >
        <Input type={'file'} multiple />
      </FormGroup>
    </Drawer>
  )
}
