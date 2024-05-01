import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&id=${searchTerm}`)
            .then((data) => setVideos(data.items));
    }, [searchTerm]);
    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
            <Typography variant="h4" fontWeight="bold" color="white" marginBottom="15px">
                Search Results for: <span style={{ color: "red" }}>{searchTerm} Videos</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed;