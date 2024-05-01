import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import Loading from "./Loading";
import Videos from "./Videos";

const VideoDetails = () => {
    const [videoDetails, setVideoDetails] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideoDetails(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items));
    }, [id]);

    console.log(videoDetails);
    console.log(videos);

    if (!videoDetails?.snippet) return <Loading />;

    const { snippet: { title, channelId, channelTitle }, statistics: { likeCount, viewCount } } = videoDetails;



    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="white" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack px={2} py={1} direction="row" justifyContent="space-between">
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: "h6" }} sx={{ opacity: "0.7", color: "white", display: "flex", alignItems: "center", gap: "10px" }}>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: "16px", color: "gray" }} />
                                </Typography>
                            </Link>
                            <Stack color="white" direction="row" gap={5}>
                                <Typography variant="body1">
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography variant="body1">
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ xs: 5, md: 1, }} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box >
    )
}

export default VideoDetails;