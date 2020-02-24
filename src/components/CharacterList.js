import React, { useEffect, useState } from "react"
import axios from 'axios'

import CharCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
    const [sanchez, setSanchez] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character/').then(res => setSanchez(res.data.results)).catch(err => console.log('Axios: ', err));
	}, [])

    console.log('Sanchez: ', sanchez)
    const results = sanchez.filter(char => {
        return char.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    if (!sanchez) return (<h1>Loading API data...</h1>)

  return (
      <div>
          <div className="row">
              <div className="col-12">
                  <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
          </div>
        <div className="row m-t-60 space-around">
            {results.map(item => (
                <CharCard key={item.id} image={item.image} name={item.name} item={item}/>
            ))}
        </div>
    </div>
  )
}
