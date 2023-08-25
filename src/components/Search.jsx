import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { callApi } from '../utils/CallApi'
const Search = () => {

  const [suggestions, setsuggestions] = useState(null);
  const [searchterm, setsearchterm] = useState("")
  const [category, setcategory] = useState("All")
  const navigate= useNavigate();
  const onHandelSubmit = (e) => { 
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchterm: `${searchterm}`
      })}`
    })
    setsearchterm('');
    setcategory("All")
   }
  
  
  const getSuggestions = () => { 
    callApi('data/suggestions.json').then(suggestionsResult => {
      setsuggestions(suggestionsResult)
    } )
   }
  useEffect(() => {
    getSuggestions();
  },[])
  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-amazonclone-yellow'>
        <select  onChange={(e) => setcategory(e.target.value)}
          className='p-2 bg-gray-300 text-black text-xs xl:text-sm border-[3.5px]'>
          <option value="">All</option>
          <option value="">Deals</option>
          <option value="">Amazon</option>
          <option value="">Fashion</option>
          <option value="">Computers</option>
          <option value="">Home</option>
          <option value="">Mobile</option>

        </select>
        <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" value={searchterm} onChange={(e) => setsearchterm(e.target.value)}/>
        <button className='w-[45px]' onClick={onHandelSubmit}>
          <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
        </button>
      </div> 

      {
        suggestions && 
        <div className=' bg-white text-black w-full z-40 absolute'>
          {
            suggestions.filter((suggestion) => {
              const currentSearchTerm = searchterm.toLocaleLowerCase()
              const title = suggestion.title.toLowerCase();
              return(
                currentSearchTerm && title.startsWith(currentSearchTerm) && title != currentSearchTerm
              )
            })
            .slice(0,10)
            .map((suggestion) => (
              <div key={suggestion.id} onClick={() => setsearchterm(suggestion.title)}>
                {suggestion.title}
              </div>
            ))
          }

        </div>
      } 
    </div>
  )
}

export default Search