/* eslint-disable react/prop-types */
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
import { Loading } from "./index";

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return <Loading />

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={1.5}>
            {
                videos.map((item, index) => (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos;