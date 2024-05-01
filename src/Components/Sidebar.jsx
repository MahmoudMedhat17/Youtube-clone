import { Stack } from "@mui/material";
import { categories } from "../Utils/Constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{ overflowY: "auto", flexDirection: { md: "column" }, height: { sx: "auto", md: "95%" }, px:{sx:0, md:2} }}
        >
            {
                categories.map((category) => (
                    <button
                        key={category.name}
                        className="category-btn"
                        style={{ backgroundColor: category.name === selectedCategory && "#FC1503", color: "white" }}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <span style={{ marginRight: "15px", color: category.name === selectedCategory ? "white" : "red" }}>{category.icon}</span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}

export default Sidebar;