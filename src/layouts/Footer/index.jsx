import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../../../assets'
import { footerLinks, socialLinks } from './Data'
export default function Footer() {
  let logo = Icons.logo
  return (
    <footer className='  divide-y divide-gray/20 md:px-10 px-5 max-w-7xl mx-auto '>
      <div className='flex  flex-col md:flex-row justify-center space-y-10 sm:space-y-0 sm:space-x-[100px] mb-5 py-10'>
        <div className='md:w-9/12 '>
          <Image
            src={logo}
            height={logo.height / 3}
            width={logo.width / 3}
            alt='lms-logo'
          />
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse
            repellendus nemo ipsa corporis. Saepe deleniti sint ipsum corporis
            libero earum aut, facilis perspiciatis, provident repudiandae
            aspernatur rem explicabo accusantium? Eveniet sint excepturi eius
            soluta, saepe aliquid explicabo maxime, assumenda at nisi distinctio
            exercitationem amet sed optio nulla reiciendis. Perferendis laborum
            ex deserunt numquam enim. Atque corporis deserunt quam laudantium?
            Illum in ex minima similique a sint reiciendis maiores aliquid
            perferendis obcaecati nam odio animi quasi commodi maxime sapiente
            architecto facere, vel fugiat tempore, vitae distinctio cupiditate.
            Exercitationem, nobis eos. Dignissimos molestias necessitatibus
            laudantium quaerat illum voluptatibus adipisci,
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 grid-rows-2 sm:sm:grid-rows-none w-full'>
          {footerLinks.map((item, key) => (
            <div key={key}>
              <h1 className=' font-bold'>{item.domain}</h1>
              <div className='sm:mt-4'>
                {item.subDomains.map((subDomain, key) => (
                  <Link href={subDomain.url} key={key}>
                    <a href='' className='flex items-center'>
                      <p className='text-gray hover:text-primary duration-300'>
                        {subDomain.title}
                      </p>
                      {!subDomain?.tag && (
                        <span className='mx-1 h-fit px-1 bg-emerald-300 text-green-700 rounded-md text-xs'>
                          {subDomain.tag}
                        </span>
                      )}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:flex-row-reverse flex-col pt-5 justify-between md:items-center'>
        <div className='flex space-x-5 items-center'>
          {socialLinks.map((item, key) => (
            <Link key={key} href={item.url}>
              <a className='' key={key}>
                <img className='' src={item.img} alt={item.title} />
              </a>
            </Link>
          ))}
        </div>
        <p className='mt-2 md:mt-0'> &copy; 2022 LMS</p>
      </div>
    </footer>
  )
}
