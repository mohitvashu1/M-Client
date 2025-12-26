import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-[#181919] transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1 m-1">
          <Image
            src="https://avatars.githubusercontent.com/u/143756996?v=4"
            alt="user-Image"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>

        <div className="col-span-11">
          <h5>Mohit Choubey</h5>
          <p>
            It is just me or everyone else? Do you feel the code quality
            decreses as the project size increases? Just refactored a lot
            of bad code ✨ #codinglife
          </p>

          <div className="flex justify-between mt-5 text-xl items-center w-[90%]">
            <div className="p-2 rounded-full hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-all">
              <BiMessageRounded />
            </div>

            <div className="p-2 rounded-full hover:bg-[#00ba7c1a] hover:text-[#00ba7c] transition-all">
              <FaRetweet />
            </div>

            <div className="p-2 rounded-full hover:bg-[#f918801a] hover:text-[#f91880] transition-all">
              <AiOutlineHeart />
            </div>

            <div className="p-2 rounded-full hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-all">
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
