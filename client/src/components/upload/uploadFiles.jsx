import { Close } from "@mui/icons-material";
import { Button, Typography, Grid2 } from "@mui/material";
import React, { useEffect, useState, forwardRef } from "react";
import "./uploadFiles.css";

const UploadFiles = forwardRef((props, ref) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]); // Store multiple files
  const [imageUrls, setImageUrls] = useState([]); // Store multiple image blob URLs
  const inputRef = React.useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileUpdate = (newFiles) => {
    const validFiles = Array.from(newFiles).filter((file) =>
      ["image/png", "application/pdf", "image/jpg", "image/jpeg"].includes(
        file.type
      )
    );

    if (validFiles.length > 0) {
      setFiles(validFiles);
      props.updateData && props.updateData(validFiles); // Update parent with files
    }
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpdate(e.dataTransfer.files);
    }
  };

  // Handle file selection via click
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpdate(e.target.files);
    }
  };

  // Trigger file input when button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setImageUrls(imageUrls.filter((_, i) => i !== index));
    props.updateData && props.updateData(updatedFiles);
  };

  useEffect(() => {
    // Clear the imageUrls array before setting new blob URLs
    setImageUrls([]);

    if (files.length > 0) {
      const newUrls = [];

      files.forEach((file, index) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          const arrayBuffer = e.target.result;
          const blob = new Blob([arrayBuffer], { type: file.type });
          const blobUrl = URL.createObjectURL(blob);
          newUrls[index] = blobUrl;

          // Update the imageUrls array once all URLs are generated
          if (newUrls.length === files.length) {
            setImageUrls([...newUrls]);
          }
        };

        reader.readAsArrayBuffer(file);
      });

      return () => {
        // Clean up previous blob URLs
        newUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [files]);

  return (
    <>
      {files.length === 0 && (
        <form id="form-file-upload" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            onChange={handleChange}
            accept={props.acceptedFiles}
            name="attachment"
            multiple // Enable multiple file selection
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : ""}
          >
            <div>
              <Typography sx={{ fontSize: "13px" }}>
                Drag and drop your PDF, PNG, JPG, JPEG files here or
              </Typography>
              <Button
                variant="text"
                className="upload-button"
                onClick={onButtonClick}
              >
                Upload files
              </Button>
            </div>
          </label>
        </form>
      )}
      <Grid2
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {files.length > 0 && (
          <>
            {files.map((file, index) => (
              <Grid2
                item
                xs={6}
                md={4}
                key={index}
                className="attachment-filename"
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px !important",
                  position: "relative",
                  width: "200px",
                }}
              >
                <div className="image-container">
                  {file.type.startsWith("image") && imageUrls[index] && (
                    <img
                      className="attachment-file"
                      src={imageUrls[index]}
                      alt="attachment"
                    />
                  )}
                  <div className="overlay">
                    <Button color="primary" variant="contained" size="small">
                      Download
                    </Button>
                  </div>
                </div>
                <div key={index} className="attachment-filename">
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#555",
                      textAlign: "center",
                    }}
                  >
                    {file && file?.name ? file.name : "Unnamed File"}
                  </Typography>

                  <Close
                    onClick={() => handleFileRemove(index)}
                    sx={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      borderRadius: "50%",
                      padding: "4px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Grid2>
            ))}
          </>
        )}
      </Grid2>
    </>
  );
});

export default UploadFiles;
