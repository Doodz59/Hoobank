import React from 'react';


const Button = ({styles}) => (

<div>
<button>
<a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-primary dark:hover:ring-secondary">
  <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary  to-secondary dark:from-primary  dark:to-black"></span>
  <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-secondary rounded-full opacity-30 group-hover:rotate-90 ease"></span>
  <span class="relative text-white">Get Started</span>
  </a>
  </button>
</div>
)

export default Button