import React from 'react'

export default function PageWrapper({ children, header }) {
  return (
    <>
      <section className=' min-h-[60vh] px-4 md:px-10'>
        {typeof header === 'undefined' ? null : (
          <div className=' py-5  bg-web_wash'>
            {typeof header === 'string' ? (
              <h1
                className=' text-gray-500 text-base md:text-2xl
           '
              >
                {header}
              </h1>
            ) : (
              header
            )}
          </div>
        )}

        {children}
      </section>
    </>
  )
}
