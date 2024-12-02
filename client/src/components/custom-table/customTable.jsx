/* eslint-disable no-unused-vars */
import {
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { findLabelByValue } from "../../common";
import { imageUrl } from "../../api";
import ConfirmationModal from "../modal/confirmation-modal";
const CustomTable = (props) => {
  const [rowData, setRowData] = useState(props.rowData);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [deleteInfo, setDeleteInfo] = useState({
    row: 0,
    index: 0,
    show: false,
    deleteFunc: undefined,
  });

  const [loading, setLoading] = useState(props.loading);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setRowData(props.rowData);
  }, [props.rowData]);

  const paginatedData = rowData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getCell = (colDef, row, rowIndex, colIndex) => {
    let children;
    switch (colDef.type) {
      case "text":
        children = colDef.capitalize ? (
          <Typography>{_.capitalize(row[colDef.key])}</Typography>
        ) : (
          <Typography>{row[colDef.key]}</Typography>
        );
        break;
      case "dropdown":
        const label = findLabelByValue(colDef.optionList, row[colDef.key]);
        children = <Typography>{label}</Typography>;
        break;
      case "image":
        children = (
          <img
            className="attachment-file"
            src={
              row[colDef.category]
                ? `${imageUrl}${row[colDef.category]}/${row[colDef.key]}`
                : `${imageUrl}${colDef.category}/${row[colDef.key]}`
            }
            alt="attachment"
            style={{ height: "80px", width: "80px" }}
          />
        );
        break;
      case "chipsArray":
        children = row[colDef.key].map((label) => (
          <Chip
            key={label}
            label={label}
            color="primary"
            variant="outlined"
            sx={{ marginBottom: 1, m: 1 }}
          />
        ));
        break;

      case "categoryImage":
        children = (
          <img
            className="attachment-file"
            src={`${imageUrl}${colDef.category}/${row[colDef.key]}`}
            alt="attachment"
            style={{ height: "80px", width: "80px" }}
          />
        );
        break;
      case "action":
        children = (
          <Stack justifyContent="center" spacing={2} direction="row">
            {colDef.isEdit ? (
              <EditIcon
                onClick={(e) => {
                  e.stopPropagation();
                  colDef.editFunc(row, rowIndex);
                }}
                sx={{ cursor: "pointer" }}
                id={`${colDef.editId}-${rowIndex}`}
              ></EditIcon>
            ) : (
              ""
            )}
            {colDef.isDelete ? (
              <DeleteIcon
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteInfo({
                    row: row,
                    index: rowIndex,
                    show: true,
                    deleteFunc: colDef.deleteFunc,
                  });
                }}
                sx={{ cursor: "pointer" }}
                id={`${colDef.deleteId}-${rowIndex}`}
              ></DeleteIcon>
            ) : (
              ""
            )}
          </Stack>
        );
        break;
      default:
        children = <Typography>{row[colDef.key]}</Typography>;
    }
    return (
      <TableCell
        align={colDef.align}
        key={`header-${colDef.id}`}
        id={`${colDef.id}-column-header`}
      >
        {children}
      </TableCell>
    );
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          mx: 3,
          mt: 3,
          width: "auto",
          // margin: "5px 20px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="job-table-header">
            <TableRow sx={{ position: "sticky", zIndex: 900, top: 0 }}>
              {props.colDef.map((column) => (
                <TableCell
                  align={column.align}
                  key={`header-${column.id}`}
                  id={`${column.id}-column-header`}
                  sx={{
                    fontWeight: "bold", // Makes the header bold
                    fontSize: "15px", // Sets the font size to 16px
                    textTransform: "capitalize",
                    fontFamily: "'Roboto Serif', serif",
                    width: "22%",
                  }}
                >
                  {_.upperCase(column.label)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <CircularProgress></CircularProgress>
            ) : paginatedData?.length > 0 ? (
              paginatedData.map(
                (row, rowIndex) =>
                  row && (
                    <TableRow
                      key={`row-${rowIndex}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {props.colDef.map((column, colIndex) => {
                        return getCell(column, row, rowIndex, colIndex);
                      })}
                    </TableRow>
                  )
              )
            ) : (
              <TableRow>
                <TableCell colSpan={props.colDef.length}>
                  <Typography align="center">No records found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          mx: 3,
          // margin: "5px 20px",
        }}
        component="div"
        count={rowData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton
        showLastButton
      />
      {deleteInfo.show ? (
        <ConfirmationModal
          open={deleteInfo.show}
          title={props.deleteContent.title}
          message={props.deleteContent.message}
          handleConfirm={() => {
            deleteInfo.deleteFunc(deleteInfo.row, deleteInfo.index);
            setDeleteInfo({ show: false });
          }}
          handleCancel={() => setDeleteInfo({ show: false })}
        />
      ) : null}
    </>
  );
};

export default CustomTable;
