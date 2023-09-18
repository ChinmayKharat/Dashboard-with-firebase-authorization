import React, { useContext } from 'react'
import './Main.css'
import { ThemeContext } from '../ThemeContext'
import Header from '../components/HeaderTemp/Header'
import Content from '../Content/Content'


function Main() {
    const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`main ${DarkTheme && "dark"}`}>
        <Header />
        <Content />
    </div>
  )
}

export default Main