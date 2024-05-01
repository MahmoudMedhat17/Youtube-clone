import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items));
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh", borderRight: "1px solid #3d3d3d" } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ color: "white", mt: 1.5, px: { sx: 0, md: 2 } }}>
                    CopyRight © 2024 by Mahmoud Medhat
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 1 }}>
                <Typography variant="h4" sx={{ color: "white" }} fontWeight="bold" marginBottom="10px">
                    {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
                </Typography>
                <Videos
                    videos={videos}
                />
            </Box>
        </Stack>
    )
}

export default Feed;