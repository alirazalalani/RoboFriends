import React from 'react';

const SearchBox=({searchfields,searchChange})=>{
    return(
        <div className="pa2">
        <input className="pa3 br3 ba b--dashed bw2 shadow-1 bg-light-green"
         type="search" placeholder="Search Robots"  onChange={searchChange}/>

      </div>
    );

}

export default SearchBox;