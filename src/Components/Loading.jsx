import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Stack, Box } from "@mui/material";

const Loading = () => {
    return (
        <Stack minHeight="95vh">
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <HourglassBottomIcon />
            </Box>
        </Stack>
    )
}

export default Loading;