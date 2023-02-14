import React from 'react'
import styles from '../../style'
import { arrowUp } from '../../assets'
import './style.css'

const GetStarted = () =>  (
  <div>
   
    <a href="#_" class="relative font-poppins inline-flex items-center justify-center w-[140px] h-[140px] rounded-full py-3 overflow-hidden font-medium text-secondary dark:text-primary transition duration-300 ease-out border-2 border-secondary dark:border-primary rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary dark:bg-primary group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-bg-primary transition-all duration-300 transform group-hover:translate-x-full ease">Get Started</span>
<span class="relative invisible">Get Started</span>
</a>

  </div>
  
)



export default GetStarted