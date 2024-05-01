import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetails(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(178,2,200,1) 100%)", height: "300px", zIndex: 10 }}
                />
                <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
            </Box>
            <Box display="flex" p={2}>
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetails;