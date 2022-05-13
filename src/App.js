import { Box } from "@mui/material";
import Search from "./components/Search";
import './App.css'

const App = () => {

  return (
   <Box style={{with: '100vh', height: '100vh', display: 'flex', justifyContent: 'center'}}>
     <Search />
   </Box>
  )
}

export default App;
