import React, { useEffect, useState } from "react";
import { productType } from "../../common";
import CustomTable from "../../components/custom-table/customTable";
import ProductForm from "../../components/modal/createProduct";
import { deleteProduct } from "../../api";
const ProductTable = (props) => {
  const [products, setProducts] = useState(props.products || []);
  const [showModal, setShowModal] = useState(
    props.showModal || {
      show: false,
      isEdit: false,
      data: {},
    }
  );

  useEffect(() => {
    setShowModal(props.showModal);
  }, [props.showModal]);

  const handleOnClickView = (row) => {
    setShowModal({
      show: true,
      isEdit: true,
      data: row,
    });
  };
  const handleModalClose = () => {
    props.setShowModal({
      show: false,
      data: {},
    });
  };

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  const handleDeleteProduct = (row) => {
    deleteProduct({
      product: row,
      setLoading: props.setLoading,
      setProducts: props.setProducts,
    });
  };

  const colDef = [
    {
      id: "name",
      label: "Name",
      key: "name",
      type: "text",
      align: "left",
    },
    {
      id: "category",
      label: "Category",
      key: "category",
      type: "text",
      align: "center",
      optionList: props.categories,
      capitalize: true,
    },
    {
      id: "subcategory",
      label: "Sub Category",
      key: "subcategory",
      type: "text",
      align: "center",
      optionList: productType,
      capitalize: true,
    },
    {
      id: "image",
      label: "Product",
      key: "images",
      type: "image",
      align: "center",
      category: "category",
    },
    {
      id: "notification-icon",
      label: "",
      key: "editAction",
      type: "action",
      align: "center",
      editId: "edit-icon",
      deleteId: "delete-icon",
      commentId: "comment-icon",
      editFunc: (row, index) => handleOnClickView(row, true, index),
      deleteFunc: (row, index) => handleDeleteProduct(row, index),
      isDelete: true,
      isEdit: true,
      page: "JobListing",
    },
  ];
  return (
    <div>
      <CustomTable
        colDef={colDef}
        rowData={products}
        deleteContent={{
          title: "Delete Confirmation",
          message: "Are you sure you want to delete this record?",
        }}
        loading={props.loading}
        pagination={true}
      ></CustomTable>
      {showModal.show && (
        <ProductForm
          open={showModal.show}
          isEdit={showModal.isEdit}
          data={showModal.data}
          handleModalClose={handleModalClose}
          setShowModal={setShowModal}
          setLoading={props.setLoading}
          setAllProduct={props.setProducts}
          categories={props.categories}
        />
      )}
    </div>
  );
};

export default ProductTable;
