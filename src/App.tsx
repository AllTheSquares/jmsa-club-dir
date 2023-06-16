// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navbar.tsx'
import FeaturedClubs from "./components/club-showcase.tsx";

function App() {
    const appearance = 'dark'
    return (
        <>
            <Navigation appearance={appearance}></Navigation>
            <FeaturedClubs appearance='light'></FeaturedClubs>
        </>
    )
}

export default App
