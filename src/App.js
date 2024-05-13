// import 'tailwindcss/tailwind.css';
import React from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";



const App = () => {
  return (
    <section className="flex flex-col gap-10 bg-teal-600 main-container items-center">
      <div className='  flex flex-col gap-5 items-center text-white text-5xl font-semibold pt-10'>
        Tech blog
      </div>
      <Search />
      <Pagination />
      <Stories />
      {/* <StickyDemo /> */}
    </section>
  )
}

export default App

