import { Button } from "@mui/material";
import React, { useState } from "react";
import { getUrl } from "../../common";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
const ViewProduct = (props) => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();

  return (
    <div>
      {" "}
      <div className="image-container">
        <img
          className="attachment-file"
          src={
            props.isEdit && typeof props.file === "object"
              ? image
              : `${getUrl()}${file}`
          }
          alt="attachment"
        />
        <div className="overlay">
          <Button
            color={"primary"}
            variant="contained"
            size="small"
            startIcon={
              <CloudDownloadOutlinedIcon
                className="download-icon"
                fontSize="large"
              />
            }
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
