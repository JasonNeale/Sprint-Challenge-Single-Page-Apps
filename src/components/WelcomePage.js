import React from "react"
import { Route, Link } from 'react-router-dom'

import SearchForm from "./SearchForm"
import CharList from './CharacterList'

export default function WelcomePage() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src="title2.png" alt="sub title - ultimate fan site" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <nav className="comp-nav">
                            <Link to="/">Home</Link>
                            <Link to="/characters">Characters</Link>
                        </nav>
                        <Route path="/characters/search" render={renderProps => {
                            return <SearchForm />
                        }} />
                        <Route exact path="/characters" render={renderProps => {
                            return <CharList />
                        }} />

                    </div>
                </div>
                
            </div>
        </div>
    )
}