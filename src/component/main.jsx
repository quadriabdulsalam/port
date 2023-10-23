import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Main() {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://media.istockphoto.com/id/1453026951/photo/kayaks-in-a-lake-surrounded-by-leafless-trees-with-a-background-of-mountains.jpg?s=612x612&w=0&k=20&c=PvGOWiXXuHLwchD1nwsCXNvlcuE_i5JsRLiwpllUiJQ=' alt='jjj'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50' >
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center' > 
                <h1 className='sm:text-5xl text-4xl font-bold tesxt-gray-800'>I'm QUADRI</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        3000, // Waits 1s
        'Coder', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'Tech Engineer', // Types 'Three' without deleting 'Two'
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaFacebookF className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedin className='cursor-pointer' size={20}/>
            </div>
            </div>
            
        </div>
        </div>

        
    )
}

export default Main


