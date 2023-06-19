import {useState, createContext} from 'react'
import './App.css'
import clubs from "./assets/clubs.json"
import Navigation from './components/navbar.tsx'
import FeaturedClubs from "./components/club-showcase.tsx";

function App() {
    const clubObject = clubs
    console.log(clubObject)
    return (
        <>
            <Navigation appearance='dark'></Navigation>
            <FeaturedClubs appearance='light'></FeaturedClubs>
            <div className="site_credits">
                <p>Coding by Ryan. Design by Yara. <a href = "https://youtu.be/dQw4w9WgXcQ">Moral support by Andy.</a></p>
            </div>
        </>
    )
}

export default App
