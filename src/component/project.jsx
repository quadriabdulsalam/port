import React from 'react'
import Projectitem from './projectitem'
import netfliximg from '../assets/netflix.png'
import googleimg from '../assets/netflix.png'
import trillerimg from '../assets/triller.png'
import youtubeimg from '../assets/youtube.png'

function Project() {
    return (
        <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                lorem ipsum donor sit adipisicing elit, incidunt maxime
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <Projectitem Img={netfliximg} title='Netflix App'/>
                <Projectitem Img={trillerimg} title='Triller App'/>
                <Projectitem Img={youtubeimg} title='Youtube App'/>
                <Projectitem Img={googleimg} title='Google map App'/>
            </div>
        </div>
    )
}

export default Project
