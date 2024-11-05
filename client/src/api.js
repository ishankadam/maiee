import { urlToFile } from "./common";

const { REACT_APP_API_URL, REACT_APP_IMAGE_URL } = process.env;
export const apiUrl = REACT_APP_API_URL;
export const imageUrl = REACT_APP_IMAGE_URL;

export const getAllProducts = async ({ setProducts, setLoading }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${apiUrl}/getData`, requestOptions)
    .then(async function (response) {
      if (response.ok) {
        return await response.json();
      } else {
        if (response.status === 401) {
          console.log("error");
        }
      }
    })
    .then((data) => {
      setProducts(data);
      setLoading(false);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = async ({
  products,
  setLoading,
  setAllProduct,
}) => {
  setLoading(true);
  const formData = new FormData();

  formData.append("products", JSON.stringify(products));

  products.forEach((product) => {
    if (product.images && product.images instanceof File) {
      formData.append("images", product.images);
    }
  });
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/createProduct`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setAllProduct(data);
    } else {
      const errorData = await response.json();
      console.error("Error creating products:", errorData);
    }
  } catch (e) {
    console.error("Fetch error:", e);
  } finally {
    setLoading(false);
  }
};

export const editProduct = async ({ products, setProducts, setLoading }) => {
  setLoading(true);

  const formData = new FormData();

  formData.append("products", JSON.stringify(products));

  if (products.images) {
    if (products.images instanceof File) {
      formData.append("images", products.images);
    } else if (typeof products.images === "string") {
      try {
        const file = await urlToFile(
          products.images,
          products.images.split("/").pop()
        );
        formData.append("images", file);
      } catch (error) {
        console.error("Error converting URL to File:", error);
      }
    }
  }

  const requestOptions = {
    method: "PUT",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/editProduct`, requestOptions);
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok.");
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    setLoading(false);
  }
};

export const deleteProduct = async ({ product, setLoading, setProducts }) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: product,
    }),
  };
  try {
    const response = await fetch(`${apiUrl}/deleteProduct`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getAllCategories = async ({ setCategories, setLoading }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${apiUrl}/getCategories`, requestOptions)
    .then(async function (response) {
      if (response.ok) {
        return await response.json();
      } else {
        if (response.status === 401) {
          console.log("error");
        }
      }
    })
    .then((data) => {
      setCategories(data);
      setLoading && setLoading(false);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCategory = async ({ category, setLoading, setCategory }) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  };
  try {
    const response = await fetch(`${apiUrl}/deleteCategory`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setCategory(data);
      setLoading(false);
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const createCategory = async ({
  category,
  setLoading,
  setCategories,
}) => {
  setLoading(true);
  const formData = new FormData();

  formData.append("category", JSON.stringify(category));

  if (category.imgSrc && category.imgSrc instanceof File) {
    formData.append("imgSrc", category.imgSrc);
  }

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/createCategory`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setCategories(data);
    } else {
      const errorData = await response.json();
      console.error("Error creating Categories:", errorData);
    }
  } catch (e) {
    console.error("Fetch error:", e);
  } finally {
    setLoading(false);
  }
};

export const editCategory = async ({ category, setCategory, setLoading }) => {
  setLoading(true);

  const formData = new FormData();

  formData.append("category", JSON.stringify(category));
  if (category.imgSrc) {
    if (category.imgSrc instanceof File) {
      formData.append("imgSrc", category.imgSrc);
    } else if (typeof category.imgSrc === "string") {
      try {
        const file = await urlToFile(
          category.imgSrc,
          category.imgSrc.split("/").pop()
        );
        formData.append("imgSrc", file);
      } catch (error) {
        console.error("Error converting URL to File:", error);
      }
    }
  }

  const requestOptions = {
    method: "PUT",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/editCategory`, requestOptions);
    if (response.ok) {
      const data = await response.json();
      setCategory(data);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok.");
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    setLoading(false);
  }
};

export const getAllTestimonials = async ({ setTestimonials, setLoading }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${apiUrl}/testimonials`, requestOptions)
    .then(async function (response) {
      if (response.ok) {
        return await response.json();
      } else {
        if (response.status === 401) {
          console.log("error");
        }
      }
    })
    .then((data) => {
      setTestimonials(data);
      setLoading && setLoading(false);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTestimonial = async ({
  testimonial,
  setLoading,
  setTestimonials,
}) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      testimonial: testimonial,
    }),
  };
  try {
    const response = await fetch(`${apiUrl}/deleteTestimonial`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const createTestimonial = async ({
  testimonial,
  setLoading,
  setTestimonials,
}) => {
  setLoading(true);
  const formData = new FormData();

  formData.append("testimonial", JSON.stringify(testimonial));

  if (testimonial.image && testimonial.image instanceof File) {
    formData.append("image", testimonial.image);
  }

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/createTestimonial`, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setTestimonials(data);
    } else {
      const errorData = await response.json();
      console.error("Error creating Testimonials:", errorData);
    }
  } catch (e) {
    console.error("Fetch error:", e);
  } finally {
    setLoading(false);
  }
};

export const editTestimonial = async ({
  testimonial,
  setTestimonial,
  setLoading,
}) => {
  setLoading(true);

  const formData = new FormData();

  formData.append("testimonial", JSON.stringify(testimonial));
  if (testimonial.image) {
    if (testimonial.image instanceof File) {
      formData.append("image", testimonial.image);
    } else if (typeof testimonial.image === "string") {
      try {
        const file = await urlToFile(
          testimonial.image,
          testimonial.image.split("/").pop()
        );
        formData.append("image", file);
      } catch (error) {
        console.error("Error converting URL to File:", error);
      }
    }
  }

  const requestOptions = {
    method: "PUT",
    body: formData,
  };

  try {
    const response = await fetch(`${apiUrl}/editTestimonial`, requestOptions);
    if (response.ok) {
      const data = await response.json();
      setTestimonial(data);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok.");
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    setLoading(false);
  }
};

export const getStats = async ({ setStats, setLoading }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${apiUrl}/stats`, requestOptions)
    .then(async function (response) {
      if (response.ok) {
        return await response.json();
      } else {
        if (response.status === 401) {
          console.log("error");
        }
      }
    })
    .then((data) => {
      setStats(data);
      setLoading && setLoading(false);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
