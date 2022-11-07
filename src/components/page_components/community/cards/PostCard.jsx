import React, { useRef, useState } from 'react'
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { useClickAway } from 'react-use'
import { Images } from '../../../../assets'
import RenderHTML from '../../../TextEditor/RenderHTML'

import OptionButton from '../../../UI/OptionButton'

const postHTML = `
<p>
গত কয়েকদিন ধরে সিম্পল React সম্পর্কে ধারণা শুরু করছিলা। কিছু কোর কনসেপ্ট দেখতেছিলা। সেখানে কিছু কিছু কনফিউশন থাকবেই। থাকাটা স্বাভাবিক। সব কিছু একদিনে বুঝে ফেলার দরকার নাই। এখনই সব বুঝে ফেললে সামনে কি করবে। তবে একদম চোখ কান বন্ধ করে রাখলেও হবে না। সেজন্য কয়েকটা জিনিস হালকা করে একটু বোঝার বা দেখার চেষ্টা করবো আজকে। সিরিয়াস কিছু না। মোটামুটি যেগুলা ইউজ করতেছি গত কয়েকদিন ধরে সেগুলার ভিতরের জিনিস সম্পর্কে কিছু ধারণা নেয়ার চেষ্টা করবো। এতে এই মডিউল এর সব বুঝতেই পারবে, এমন কোন কথা নাই। তারপরেও একটু একটু করে দেখো। কি আছে জীবনে!!!
</p>    
<p>
অন্য সব দিনের মতো আজকেও ৯টা ভিডিও এবং সবার শুরুতেই আছে তুমি যে npx ইউজ করতেছো সেটা আসলে কি জিনিস কিংবা বার বার যে Create React App দিয়ে প্রজেক্ট বানিয়েই যাচ্ছো, এইটা আসলে কি জিনিস। এছাড়াও JSX আসলে কি জিনিস। এইটা কি সত্যিকারের html নাকি অন্য কিছু। আর সেটা যেই জিনিস হোক না কেন, সেটা কিভাবে কাজ করে সেই আলোচনা করতে গিয়ে ছোট করে babel সম্পর্কেও বলা হয়েছে। এইটা babel (ব্যাবিলিয়েনের বাঁশিওয়ালা না যে তোমাকে বাঁশি ফুঁ দিয়ে নিয়ে যাবে)
</p>    
<p>
এরপর আমরা কম্পোনেন্ট নিয়ে দেখেছি। props আসলে কিভাবে পাঠানো হয়, সেটাও দেখেছি। সেখানে দুইটা জিনিস আছে। যেগুলা আমাদের সামনে কাজে লাগবে। বিশেষ করে React এর ডাটা নাক বরাবর চলে অর্থাৎ unidirectional data flow হয়। সেটা নিয়ে কিছু আলোচনা। এরপর আছে সবচেয়ে মজার জিনিস state নিয়ে কথাবার্তা । সেখানে আমরা দেখবো state হচ্ছে immutable অর্থাৎ চাইলেই সরাসরি  চেইঞ্জ করতে পারবে না। আবার জিনিসটা asynchronous ও বটে। সেই এঙ্গেল থেকে কিছু আলোচনা হয়েছে।
</p>    

`
export default function PostCard() {
  let reactTimeoutId
  const [activeReact, setActiveReact] = useState(false)
  const [activeComment, setActiveComment] = useState(false)
  const reactRef = useRef()
  useClickAway(reactRef, () => {
    setActiveReact(false)
  })
  const actions = [
    {
      title: 'Like',
      icon: <AiOutlineLike size={25} />,
      action: () => {
        setActiveReact(true)
        clearInterval(reactTimeoutId)
        reactTimeoutId = setTimeout(() => {
          setActiveReact(false)
        }, 5000)
      },
    },
    {
      title: 'Comment',
      icon: <BiComment size={25} />,
      action: () => {},
    },
  ]
  const reacts = {
    inacive: {
      Like: <AiOutlineLike size={25} />,
      Unlike: <AiOutlineDislike size={25} />,
    },
    active: {
      Like: <AiFillLike size={25} />,
      Unlike: <AiFillDislike size={25} />,
    },
  }
  const [userReact, setUserReact] = useState(null)
  return (
    <div className=' bg-white shadow-fb divide-y rounded-lg'>
      {/* Header */}
      <div className='p-5 flex items-center justify-between'>
        <div className='flex space-x-4 items-center'>
          <div className=' '>
            <img
              src={Images.userAvatar}
              alt=''
              className='h-10 w-10 rounded-full p-1 ring-1'
            />
          </div>
          <div>
            <h4>Albi Ummid</h4>
            <small>October 29 at 10:58 AM</small>
          </div>
        </div>
        <OptionButton />
      </div>

      {/* HTML Render */}
      <div className='p-5'>
        <RenderHTML html={postHTML} />
      </div>

      {/* Post Reactions */}
      <div className='p-5 flex justify-between'>
        <div>22K</div>
        <div>
          <span>99 Comments 86 Shares</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className=' flex items-center p-2 '>
        {actions.map((action, key) => {
          return (
            <div
              onMouseEnter={() => {
                action.action()
              }}
              className=' w-full flex items-center gap-2 justify-center p-2 hover:bg-web_wash rounded-md cursor-pointer relative'
              key={key}
            >
              {action.title === 'Like' ? (
                <>
                  {userReact ? (
                    <>
                      <span>{reacts.active[userReact]}</span>
                      <span>{userReact}</span>
                    </>
                  ) : (
                    <>
                      <span>{action.icon}</span>
                      <span>{action.title}</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  <span>{action.icon}</span>
                  <span>{action.title}</span>
                </>
              )}

              {action.title === 'Like' && activeReact && (
                <div
                  ref={reactRef}
                  //   onMouseEnter={() => {
                  //     clearInterval(reactTimeoutId)
                  //   }}
                  //   onMouseLeave={() => {
                  //     clearInterval(reactTimeoutId)
                  //     reactTimeoutId = setTimeout(() => {
                  //       setActiveReact(false)
                  //     }, 1000)
                  //   }}
                  className=' absolute bottom-14 shadow-3xl l bg-white p-1 rounded-md flex items-center gap-2 '
                >
                  {Object.entries(reacts.inacive).map(([title, icon]) => {
                    return (
                      <div
                        onClick={() => {
                          clearInterval(reactTimeoutId)
                          setUserReact((prv) => (prv === title ? null : title))
                          setActiveReact(false)
                        }}
                        className=' flex items-center gap-2 hover:bg-web_wash rounded-md p-2'
                      >
                        <span>
                          {userReact && userReact === title
                            ? reacts.active[title]
                            : icon}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Post Comments */}

      {activeComment && <div className=' p-5'></div>}
    </div>
  )
}
