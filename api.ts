type Status = "SUCCESS" | "ERROR" | "LOADING";

interface ApiResponse<T> {
  status: Status;
  data?: T;
  error?: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

function fetchProducts(): ApiResponse<Product[]> {
  return {
    status: "SUCCESS",
    data: [
      { id: 1, title: "Laptop", price: 50000 },
      { id: 2, title: "Phone", price: 20000 }
    ]
  };
}

function handleResponse(response: ApiResponse<Product[]>) {
  if (response.status === "SUCCESS" && response.data) {
    response.data.forEach(p =>
      console.log(`${p.title} - ₹${p.price}`)
    );
  } else if (response.status === "ERROR") {
    console.log(response.error);
  } else {
    console.log("Loading...");
  }
}

const response = fetchProducts();
handleResponse(response);
