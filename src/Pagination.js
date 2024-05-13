/* eslint-disable jsx-a11y/anchor-is-valid */
import { useGlobalContext } from "./Context";

const Pagination = () => {
    const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
    return (
        <div className='text-white flex gap-2 items-center px-3 py-2  border w-fit rounded'>
            <button onClick={() => getPrevPage()} className="px-3 py-1 rounded border border-1 hover:bg-[#40c9bd]">Prev</button>
            <p>Page {page} of {nbPages}</p>
            <button onClick={() => getNextPage()} className="px-3 py-1 rounded border border-1 hover:bg-[#40c9bd]">Next</button>
        </div>
    )
}

export default Pagination
