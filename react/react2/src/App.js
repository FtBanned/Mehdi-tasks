import Data from "./pages/Data"
import Followers from "./pages/Followers"
import Repos from "./pages/Repos"
import { Route, Routes } from "react-router"


function App() {
    return (
       <>
       <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/followers" element={<Followers/>}/>
        <Route path="/repos" element={<Repos/>}/>
       </Routes>
       </>
    )
}

export default App