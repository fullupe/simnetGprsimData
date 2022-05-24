import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react';
import Card from '../components/Card';
import Footer from "../components/Footer";
import  { Toaster } from 'react-hot-toast';
//import Image from 'next/image'

const Home: NextPage = () => {
  
  ///const video = useRef<HTMLVideoElement>();

  return (
    <div className="flex justify-content items-center flex-col h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <video
                className="w-full h-screen object-cover  opacity-90"
                //src=" ../bgvideo.mp4" 
                //type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                />

      <div className="top-0 right-0 left-0 bottom-0 absolute h-screen ">

    <div className="
     
     
    opacity-90
    pt-8
    bg-slate-500 
    flex 
    flex-col
    justify-center 
    items-center 
    h-screenn 
    overflow-hidden">

        

           {/* <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/> */}
  
           <Card/>

           <Footer/>
    
 
           
   </div>



    </div>
    </div>
  )
}

export default Home
