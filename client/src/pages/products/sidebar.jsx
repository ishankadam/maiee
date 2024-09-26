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
  const [open, setOpen] = useState(null); // Use null to represent no open category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleClick = (category, item, field) => {
    if (field === "category") {
      props.setProductType((prev) => ({
        ...prev,
        category: item,
        subCategory: "all", // Reset subCategory to "all" when changing category
      }));
      setSelectedCategory(item);
      setSelectedSubCategory(null);

      // Toggle category open state
      setOpen((prev) => (prev === item ? null : item));
    } else {
      props.setProductType((prev) => ({
        ...prev,
        subCategory: item,
      }));
      setSelectedSubCategory(item);
    }
  };

  return (
    <div className="sidebar">
      <List>
        {experticesData.map((category, catIndex) => (
          <div key={catIndex}>
            <Typography className="category-header">{category.name}</Typography>
            {category.items.map((item, index) => {
              return (
                <div key={index}>
                  <ListItem
                    onClick={() =>
                      handleClick(category.name, item.name, "category")
                    }
                    className={
                      item.name === selectedCategory ? "highlighted" : ""
                    }
                  >
                    <ListItemText primary={item.name} />
                    {item.subcategories.length > 0 &&
                      (open === item.name ? <ExpandLess /> : <ExpandMore />)}
                  </ListItem>
                  {item.subcategories.length > 0 && (
                    <Collapse
                      in={open === item.name}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.subcategories.map((subitem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            sx={{ pl: 4 }}
                            onClick={() =>
                              handleClick(category.name, subitem, "subCategory")
                            }
                            className={
                              subitem === selectedSubCategory
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
              );
            })}
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
