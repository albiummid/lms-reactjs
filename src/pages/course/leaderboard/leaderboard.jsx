import { Table } from '@mantine/core'
import React from 'react'
import { Icons } from '../../../assets'
import CoursePageLayout from '../../../layouts/CoursePageLayout'
import { data } from './Data'

export default function LeaderBoard() {
  const ths = (
    <tr>
      <th align='center' className='flex justify-center'>
        Rank
      </th>
      <th>Name</th>
      <th className='flex justify-center'>Marks</th>
    </tr>
  )

  const rows = data.board.map((element) => (
    <tr key={element.index} className=''>
      <td align='center'>
        {element.index === 1 ? (
          <img src={Icons.trophy} className='w-5' />
        ) : (
          element.index
        )}
      </td>
      <td className='flex gap-2 items-center'>
        <img
          className='w-5 h-5 rounded-full'
          src={element.user.avatar}
          alt=''
        />
        <span className=' truncate'>{element.user.name}</span>
      </td>
      <td align='center'>{element.totalMarks}</td>
    </tr>
  ))
  return (
    <CoursePageLayout header={'LeaderBoard - Think in a Redux way'}>
      <div className=' bg-white shadow-fb rounded-lg px-6 py-4'>
        <h4 className=' my-4'>Your position in LeaderBoard</h4>

        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>{ths}</thead>
          <tbody>
            <tr>
              <td align='center'>{data.yourAssessment.index}</td>
              <td className='flex gap-2 items-center'>
                <img
                  className='w-5 h-5 rounded-full'
                  src={data.yourAssessment.user.avatar}
                  alt=''
                />
                <span className=' truncate'>
                  {data.yourAssessment.user.name}
                </span>
              </td>
              <td align='center'>{data.yourAssessment.totalMarks}</td>
            </tr>
          </tbody>
          {/* <tfoot>{ths}</tfoot> */}
        </Table>

        <h4 className='my-4'>LeaderBoard - Think in a Redux way -</h4>
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>{ths}</thead>
          <tbody>{rows}</tbody>
          {/* <tfoot>{ths}</tfoot> */}
        </Table>
      </div>
    </CoursePageLayout>
  )
}
