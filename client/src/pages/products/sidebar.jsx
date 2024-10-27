import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import "./sidebar.css";
import { experticesData } from "../../common";

const Sidebar = (props) => {
  // Use a single state object to manage both selected category and open state
  const [sidebarState, setSidebarState] = useState({
    selectedCategory: props.productType.category || {},
    selectedSubCategory: props.productType.subCategory || "all",
    open: null, // Represents the currently open category
  });

  const handleClick = (item, field, categoryName) => {
    if (field === "category") {
      // Update the state with the selected category and reset subcategory
      setSidebarState((prev) => ({
        ...prev,
        selectedCategory: item,
        selectedSubCategory: "all", // Reset subCategory to "all" when changing category
        open: prev.open === item ? null : item, // Toggle the open state
      }));

      props.setProductType((prev) => ({
        ...prev,
        category: item,
        subCategory: "all", // Reset subCategory to "all" when changing category
      }));
    } else {
      // Update subcategory when clicking on subcategory
      setSidebarState((prev) => ({
        ...prev,
        selectedSubCategory: item,
      }));

      props.setProductType((prev) => ({
        ...prev,
        category: categoryName, // Keep track of the parent category
        subCategory: item,
      }));
    }
  };

  return (
    <div className="sidebar">
      <List>
        {experticesData.map((category, catIndex) => (
          <div key={catIndex}>
            <section className="category-section">
              <Typography className="category-header">
                {category.name}
              </Typography>
            </section>
            {category.items.map((item, index) => (
              <div key={index}>
                <ListItem
                  onClick={() =>
                    handleClick(item.name, "category", category.name)
                  }
                  className={
                    item.name === sidebarState.selectedCategory
                      ? "highlighted"
                      : ""
                  }
                >
                  <ListItemText
                    primary={item.name}
                    sx={{
                      fontSize: "22px !important",
                    }}
                  />
                  {item.subcategories.length > 0 &&
                    (sidebarState.open === item.name ? (
                      <ExpandLess sx={{ color: "black" }} />
                    ) : (
                      <ExpandMore sx={{ color: "black" }} />
                    ))}
                </ListItem>
                {item.subcategories.length > 0 && (
                  <Collapse
                    in={sidebarState.open === item.name}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List
                      component="div"
                      disablePadding
                      sx={{ border: "1px solid #d6d6d6" }}
                    >
                      {item.subcategories.map((subitem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          sx={{
                            pl: 4,
                            background: "#edf2f7",
                          }}
                          onClick={() =>
                            handleClick(subitem, "subCategory", item.name)
                          }
                          className={
                            subitem === sidebarState.selectedSubCategory
                              ? "highlighted-subcategory"
                              : ""
                          }
                        >
                          <ListItemText primary={subitem} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
