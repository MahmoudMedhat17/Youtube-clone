import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import { logo } from "../Utils/Constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <>
            <Stack
                direction={"row"}
                p={2}
                sx={{ backgroundColor: "#000", position: "sticky", top: 0, display: "flex", justifyContent: "space-between" }}
            >
                <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
                    <img src="../../public/youtube.png" alt="logo" height={45} />
                </Link>
                <SearchBar />
            </Stack>
        </>
    )
}

export default Navbar;