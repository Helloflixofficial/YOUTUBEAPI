import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const Sidebar = ({ selectedCategory, setSelectedCategory }) => (

    <Stack
      diraction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(Category.name)}
          style={{
            background: Category.name === selectedCategory && "#FFDE00",
          }}
          key={Category.name}>
          <span>{Category.icon}</span>
          <span >{Category.name}</span>
        </button>
      ))}
    </Stack>
);

export default Sidebar;