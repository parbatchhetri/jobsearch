import React from 'react'
import "./searchstyle.css"
import { AiOutlineSearch, AiOutlineCloseCircle} from "react-icons/ai";
import{ BsHouseDoor } from "react-icons/bs"
import{ CiLocationOn } from "react-icons/ci"
const Searchbar = () => {
  return (
    <div className='searchdiv'>
      <form>
        <div className='div1'>
          <div className='searchpart'>
          <AiOutlineSearch className="logosearch"/>
          <input type='text' placeholder='Search Job Here ...' className='text1'></input>  
          <AiOutlineCloseCircle className="cross"/>

          </div>
          <div className='searchpart'>
          <BsHouseDoor className="logosearch"/>
          <input type='text' placeholder='Search by Company ...' className='text1'></input>  
          <AiOutlineCloseCircle className="cross"/>

          </div>
          <div className='searchpart'>
          <CiLocationOn className="logosearch"/>
          <input type='text' placeholder='Search by Location ...' className='text1'></input>  
          <AiOutlineCloseCircle className="cross"/>
          </div>

          <button className='butt1'>Search</button>

        </div>
      </form>

      <div className='div2'>
        <div className='search1'>
          <label className='sort'>Sort by:</label>
          <select className='opt'>
            <option >Relevance</option>
            <option >Inclusive</option>
            <option >Starts With</option>
            <option >Contains</option>
          </select>
        </div>
        <div className='search1'>
          <label className='sort'>Type:</label>
          <select className='opt'>
            <option >Full-time</option>
            <option >Remote</option>
            <option >Contract</option>
            <option >Part-time</option>
          </select>
        </div>
        <div className='search1'>
          <label className='sort'>Level:</label>
          <select className='opt'>
            <option >Senior</option>
            <option >Beginner</option>
            <option >Intermediate</option>
            <option >Advocate</option>
          </select>
        </div>
        <span className='clear'>Clear All</span>

      </div>

    </div>
  )
}

export default Searchbar