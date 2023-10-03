import React, { useContext } from 'react'
import Posts from '../../components/posts/Posts';
import Stories from '../../components/stories/Stories';
import { DarkMode } from '../../context/Darkmode'

const Home = () => {

  const {dark, setDark} = useContext(DarkMode);

  return (
    <div className={dark ? "bg-slate-300 text-white w-full h-full py-7 px-10 overflow-scroll scroll-smooth scrollbar-hide" :"h-full  py-7 px-10  overflow-scroll w-full scroll-smooth bg-slate-200 scrollbar-hide"}>



        <Stories />

        <Posts />

        
    </div>
  )
}

export default Home
