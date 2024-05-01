import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../Utils/Constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: { xs: "356px", md: "320px" }, height: "326px", margin: "auto", marginTop }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ height: 180, width: 180, borderRadius: "50% ", border: "1px solid #e3e3e3" }}
                    />
                    <Typography variant="subtitle1" fontWeight="bold" color="white" marginTop="10px">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ color: "gray", fontSize: 12, ml: 1 }} />
                    </Typography>
                    {
                        channelDetail?.statistics?.subscriberCount && (
                            <Box display="flex" gap="5px" alignItems="center" color="white" fontWeight="bold" fontSize="15px" sx={{ opacity: "0.8" }}>
                                <Typography variant="body2">
                                    {
                                        parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
                                    }
                                </Typography>
                                <Typography>
                                    Subscribers
                                </Typography>
                            </Box>
                        )
                    }
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard;