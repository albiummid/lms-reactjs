import moment from 'moment'
import { Link } from 'react-router-dom'
import { Images } from '../../../../assets'
import RenderHTML from '../../../TextEditor/RenderHTML'
import ImagePreview from '../../../UI/ImagePreview'

export default function ThreadCard({
  commitId,
  hash,
  details,
  status,
  createdAt,
  images = [
    'https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-73zz29-63010-Preview.webp',
    'https://c4.wallpaperflare.com/wallpaper/690/228/914/code-javascript-hd-wallpaper-preview.jpg',
    'https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg',
  ],
}) {
  const statusColors = {
    Pending: 'text-red-400 border-red-400 border-2',
    Received: 'text-blue-400 border-blue-400 border-2',
    Opened: 'text-orange-400 border-orange-400 border-2',
    Resolved: 'text-green-400 border-green-400 border-2',
    Complete: 'text-green-400 border-green-400 border-2',
  }
  // const [showMore, setShowMore] = useState(false)

  // const formattedDetails =
  //   showMore || details?.length < 150 ? (
  //     details
  //   ) : (
  //     <span>
  //       {details.substr(0, 150)}
  //       <span className=' font-semibold' onClick={() => setShowMore(true)}>
  //         {' '}
  //         ... Show more
  //       </span>
  //     </span>
  //   )

  return (
    <Link to={`/support/tickets/${hash}`}>
      <div className='shadow-fb  rounded-lg divide-y bg-white pb-10 '>
        <section className=' flex flex-wrap justify-between items-center p-5'>
          <div className='flex items-center space-x-4'>
            <div className='border border-gray-300 p-[5px] rounded-full'>
              <img
                src={Images.userAvatar}
                className='w-12 h-12 rounded-full '
                alt=''
              />
            </div>
            <div>
              <h4>Albi Ummid</h4>
              <p className=' text-base'>{moment(createdAt).fromNow()}</p>
            </div>
          </div>
          <p className={` px-2 text-base rounded-md ${statusColors[status]}`}>
            {status}
          </p>
        </section>
        <section className='p-5'>
          <RenderHTML />
          <div className='ml-auto w-full flex'>
            <div className='ml-auto '>
              <ImagePreview images={images} />
            </div>
          </div>
        </section>
        <section className='grid grid-cols-12 p-5 pt-8 '>
          <div className='col-span-4 '>
            <h4>Commit Id: {commitId}</h4>
          </div>
          <div className='col-span-8 ml-auto'>
            <h4>Hash: {hash}</h4>
          </div>
        </section>
      </div>
    </Link>
  )
}
