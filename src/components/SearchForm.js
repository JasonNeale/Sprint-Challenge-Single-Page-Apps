import React from "react"

const SearchForm = ({searchTerm, setSearchTerm}) => {
  return (
    <section className="search-form">
     <form>
        <div className="form-group">
            <label htmlFor="name">Search:</label>
            <input 
                type="text" 
                className="form-control-lg"
            id="name" 
            name="namefield" 
            placeholder="Search by name..." 
            value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} />
            
            </div>    
        </form>
    </section>
  )
}


export default SearchForm