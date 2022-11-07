import React from 'react'
import { useState } from 'react'
import OptionButton from '../../../components/UI/OptionButton'
import PageWrapper from '../../../layouts/PageWrapper'
import ArniamView from './ArniamView'
import RegularView from './RegularView'

export default function CourseView() {
  const [currentView, setCurrentView] = useState('arniam')
  return (
    <PageWrapper>
      <div className=' flex  items-center justify-end'>
        <OptionButton
          options={[
            {
              title: 'Arniam',
              action: () => {
                setCurrentView('arniam')
              },
            },
            {
              title: 'Regular',
              action: () => {
                setCurrentView('regular')
              },
            },
          ]}
        />
      </div>

      <section>
        {currentView === 'arniam' ? (
          <ArniamView />
        ) : currentView === 'regular' ? (
          <RegularView />
        ) : null}
      </section>
    </PageWrapper>
  )
}
