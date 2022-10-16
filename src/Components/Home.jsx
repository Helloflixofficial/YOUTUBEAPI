import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/Api";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("JS Mastery");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        className="BOX"
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "ipx solid #8758FF ",
          px: { sx: 0, md: 2, color: "#FFFAE7" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#FFDE00" }}
        >
          The Copyright Profesnal
        </Typography>
      </Box>
      <Box p={1} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          {selectedCategory}
          <span> </span>
          <span style={{ color: "#D2001A" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Home;
