import { SideBar } from '../components'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState,createContext} from 'react'

export const AppContext = createContext()


export default function App({ Component, pageProps }: AppProps) {
  const [darkMode,setDarkMode] = useState(false);
  const handleColorChange = () => {
    setDarkMode(prev => !prev);
  }
  
  return (
      <div className={darkMode? 'dark': ''}>
        <AppContext.Provider value ={{darkMode,handleColorChange}}>
          <SideBar >
            <Component {...pageProps} />
          </SideBar>
        </AppContext.Provider>
      </div>

)}
