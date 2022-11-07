import { Affix } from 'antd'
import React from 'react'
import HeaderCard from '../../components/page_components/community/cards/HeaderCard'
import PostCard from '../../components/page_components/community/cards/PostCard'
import Drawer from '../../components/UI/Drawer'
import CoursePageLayout from '../../layouts/CoursePageLayout'

export default function CommunityPage() {
  return (
    <CoursePageLayout>
      <section className='hidden lg:grid grid-cols-12 '>
        {/* Desktop version */}
        <div className='col-span-7 space-y-4'>
          {/* Content section */}
          <HeaderCard />
          <PostCard />
        </div>

        {/* Right sidebar */}
        <Affix className='col-span-5'></Affix>
      </section>

      <section className='lg:hidden'>{/* Mobile version */}</section>
    </CoursePageLayout>
  )
}
