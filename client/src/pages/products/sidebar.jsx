import React, { useEffect, useState, useCallback } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import "./sidebar.css";
import { capitalizeWords } from "../../common";

const Sidebar = ({
  categories,
  productType: initialProductType,
  setProductType,
}) => {
  const [productType, setProductTypeState] = useState(initialProductType);

  const handleCategoryClick = useCallback(
    (category) => {
      setProductType((prev) => {
        const isSameCategory = prev.openCategory === category;
        return {
          ...prev,
          category: isSameCategory ? "all" : category, // Set to "all" to close if same category
          openCategory: isSameCategory ? null : category, // Close if same category, open if different
          subCategory: "all", // Reset subcategory on category click
        };
      });
    },
    [setProductType]
  );

  const handleSubCategoryClick = useCallback(
    (subcategory) => {
      setProductType((prev) => ({
        ...prev,
        subCategory: subcategory, // Set the selected subcategory
      }));
    },
    [setProductType]
  );

  useEffect(() => {
    setProductTypeState(initialProductType);
  }, [initialProductType]);

  return (
    <div className="sidebar">
      <List>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index}>
              <ListItem
                onClick={() => handleCategoryClick(category.name)}
                aria-expanded={productType.openCategory === category.name}
              >
                <ListItemText primary={capitalizeWords(category.name)} />
                {category.subcategories.length > 0 &&
                  (productType.openCategory === category.name ? (
                    <ExpandLess sx={{ color: "black" }} />
                  ) : (
                    <ExpandMore sx={{ color: "black" }} />
                  ))}
              </ListItem>
              {category.subcategories.length > 0 && (
                <Collapse
                  in={productType.openCategory === category.name}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {category.subcategories.map((subitem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent event bubbling
                          handleSubCategoryClick(subitem);
                        }}
                        className={
                          subitem === productType.subCategory
                            ? "highlighted-subcategory"
                            : ""
                        }
                      >
                        <ListItemText primary={capitalizeWords(subitem)} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))
        ) : (
          <Typography>No categories available</Typography>
        )}
      </List>
    </div>
  );
};

export default Sidebar;
