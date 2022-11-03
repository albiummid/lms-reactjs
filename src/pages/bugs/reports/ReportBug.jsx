import { Input } from 'antd'
import React, { useState } from 'react'
import TextEditor from '../../../components/TextEditor/TextEditor'
import Button from '../../../components/UI/Button'
import Drawer from '../../../components/UI/Drawer'
import { FormGroup } from '../../../components/UI/Form'

export default function ReportBug({ openDrawer, setOpenDrawer }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Drawer
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false)
      }}
    >
      <FormGroup label={'Title'}>
        <Input name='title' value={title} onChange={(v) => setTitle(v)} />
      </FormGroup>
      <FormGroup label={'Description'}>
        <TextEditor data={description} onChange={(d) => setDescription(d)} />
      </FormGroup>
      <Button
        className={'mx-auto flex items-center w-3/4 mt-6 justify-center'}
        variant={'green'}
      >
        Submit
      </Button>
    </Drawer>
  )
}
