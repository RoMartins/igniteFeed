import { Header } from "./Components/Header"
import {Post} from "./Post"
import './global.css'

export function App() {
  return (
    <>
    <Header />
    <Post 
      author='Diego Fernades' 
      content= 'lorem dkldamnafa akdnasjnasjk '   
    />
    <Post 
      author='Rodrigo Martins' 
      content= 'lorem dkldamnafa akdnasjnasjk '   
    />
    </>
    )

}

 
