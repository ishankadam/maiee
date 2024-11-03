/* eslint-disable react-hooks/exhaustive-deps */
import { Close } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React, { useEffect, useState, forwardRef } from "react";
import "./uploadFiles.css";
import { imageUrl } from "../../api";

const UploadFiles = forwardRef((props, ref) => {
  const [files, setFiles] = useState([]);
  const inputRef = React.useRef(null);

  // Local state to hold URLs for previews
  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileUpdate = (newFiles) => {
    const validFiles = Array.from(newFiles).filter((file) =>
      ["image/png", "application/pdf", "image/jpg", "image/jpeg"].includes(
        file.type
      )
    );

    if (validFiles.length > 0) {
      setFiles((prevFiles) => {
        const updatedFiles = props.isEdit
          ? [validFiles[0]]
          : [...prevFiles, ...validFiles];
        return updatedFiles;
      });
      props.updateData && props.updateData(validFiles);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpdate(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    props.updateData && props.updateData(updatedFiles);
  };

  useEffect(() => {
    // Set initial files from props when editing
    if (props.isEdit && props.images && props.images.length > 0) {
      setFiles(props.images);
    }
  }, [props.images, props.isEdit]);

  useEffect(() => {
    // Generate previews only for `File` objects
    const previews = files.map((file) =>
      file instanceof File
        ? URL.createObjectURL(file)
        : `${imageUrl}${props.category}/${file}`
    );
    setFilePreviews(previews);

    // Clean up object URLs on unmount
    return () => {
      previews.forEach((preview) => {
        if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
      });
    };
  }, [files, props.category]);

  return (
    <div id="file-upload-container">
      <form id="form-file-upload" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          onChange={handleChange}
          accept={props.acceptedFiles}
          name="attachment"
          multiple={true}
          style={{ display: "none" }} // Hide the input element
        />
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div>
            <Typography sx={{ fontSize: "13px" }}>
              Upload your PDF, PNG, JPG, JPEG files here
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

      {files.length > 0 && (
        <div className="files-preview">
          {files.map((file, index) => (
            <div key={index} className="attachment-filename">
              <Typography>{file instanceof File ? file.name : file}</Typography>
              <Close onClick={() => handleFileRemove(index)} />
              <div className="image-container">
                {/* Display image preview */}
                {filePreviews[index] && (
                  <img
                    className="attachment-file"
                    src={filePreviews[index]}
                    alt="attachment"
                  />
                )}
                <div className="overlay">
                  <Button color="primary" variant="contained" size="small">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default UploadFiles;
