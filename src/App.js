import {
  Home,
  VideoDetail,
  ChannelDetail,
  Navbar,
  Searchdata,
} from "./Components/IExport";
import './index.css';
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <Box sx={{backgroundColor:"#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video/:id" element={<VideoDetail />} />
          <Route path="/Channel/:id" element={<ChannelDetail />} />
          <Route path="/Search/:searchTerm" element={<Searchdata />} />
        </Routes>
        </Box>
      </Router>
    </>
  );
}