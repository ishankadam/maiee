import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import "./chipTextfield.css";

const ChipTextfield = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      if (!values.includes(inputValue.trim())) {
        const updatedValues = [...values, inputValue.trim()];
        setValues(updatedValues);
        props.handleEdit(updatedValues, props.config.field);
      }
      setInputValue("");
    }
  };

  const handleChange = (event, newValue) => {
    setValues(newValue);
    props.handleEdit(newValue, props.config.field);
  };

  useEffect(() => {
    setValues(props.value || []);
  }, [props.value]);
  return (
    <Autocomplete
      multiple
      freeSolo
      sx={props.sx ? props.sx : {}}
      options={props.predefinedOptions}
      value={values}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            key={index}
            color="primary"
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label={props.label} onKeyDown={handleKeyDown} />
      )}
    />
  );
};

export default ChipTextfield;
