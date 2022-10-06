import { Header } from "./Components/Header"
import {Post} from "./Components/Post"
import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./Components/Sidebar"

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>

      <Sidebar />
      <main>
        <Post/>
        <Post/>
      </main>
    </div>
    </>
    )

}

 
