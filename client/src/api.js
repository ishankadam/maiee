const { REACT_APP_API_URL } = process.env;
export const apiUrl = REACT_APP_API_URL;

export const getAllProducts = async (setProductsData) => {
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
      setProductsData(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = async ({ products, setLoading }) => {
  setLoading(true);

  const formData = new FormData();

  products.forEach((product) => {
    formData.append("products", JSON.stringify(product));
    if (product.image) {
      formData.append("images", product.image);
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
      console.log(data);
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
