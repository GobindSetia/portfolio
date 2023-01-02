import { Routes,Route } from 'react-router-dom';

import { Home } from '../components/MainSection'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Projects } from '../components/Projects'

export const AllRoutes = ()=>{
    return <div>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/projects" element={<Projects/>}/>
       </Routes>
     </div>
 }