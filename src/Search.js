import React from 'react';
import { useGlobalContext } from './Context';

const Search = () => {
    const { searchPost, query } = useGlobalContext()
    return (
        <div className='w-full'>
            <form onSubmit={(e) => e.preventDefault()} className='w-full flex justify-center items-center '>
                <input type="text"
                    placeholder='Search Here...'
                    value={query}
                    className='p-2 rounded w-1/3'
                    onChange={(e) => searchPost(e.target.value)} />
            </form>
        </div>
    )
}

export default Search
