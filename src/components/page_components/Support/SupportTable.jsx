import { Table } from 'antd'
import moment from 'moment'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function SupportTable() {
  const tableColumns = [
    {
      title: 'SL#',
      dataIndex: 'sl',
      key: 'sl',
      width: '60px',
    },
    {
      title: 'Bug ID',
      dataIndex: 'bugId',
      key: 'bugId',
      width: '200px',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '400px',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '120px',
    },
    {
      title: 'Last Commit',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text, record, index) => {
        return <span>{moment().fromNow(1666029657159)}</span>
      },
      width: '150px',
    },
    {
      title: 'Action',
      key: 'createdAt',
      align: 'center',
      render: (text, record, index) => {
        return (
          <span className='flex w-full mx-auto'>
            <AiOutlineArrowRight
              size={20}
              className='text-red-400 cursor-pointer w-full '
              onClick={() => {
                console.log(record)

                alert('Clicked !')
              }}
            />
          </span>
        )
      },
      width: '80px',
    },
  ]

  const tableData = [
    {
      sl: 1,
      bugId: 864097,
      title: 'Next JS server crashing continuously !',
      status: 'Received',
      createdAt: 1666029657159,
    },
  ]
  return (
    <Table
      tableLayout='fixed'
      dataSource={tableData}
      columns={tableColumns}
      className='w-full overflow-auto'
    />
  )
}
