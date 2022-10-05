import { Header } from "./Components/Header"
import {Post} from "./Post"
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
        <Post author="rodrigo" content='afhjkfsjdkfks'/>
        <Post author="joao" content='afhjkfsjdkfks'/>
      </main>
    </div>
    </>
    )

}

 
