import { Drawer as DWR } from 'antd'
import React from 'react'
import useScreenWidth from '../../hooks/useScreenWidth'

export default function Drawer({
  children,
  open,
  onClose,
  title,
  width,
  ...rest
}) {
  const { screenSize } = useScreenWidth()
  return (
    <DWR
      width={width ? width : screenSize === 'sm' ? '95%' : null}
      title={title}
      open={open}
      onClose={onClose}
      height={'auto'}
      {...rest}
    >
      {children}
    </DWR>
  )
}
