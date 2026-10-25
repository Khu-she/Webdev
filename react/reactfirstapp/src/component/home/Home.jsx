import { useEffect, useState } from "react";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                console.log("Response:", response);

                const data = await response.json();

                console.log("Data:", data);
                console.log("Products:", data.products);

                setProducts(data.products);

            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };
        fetchProducts();

    }, []);

    return (
        <div className="container">

            <h1>Products</h1>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map((product) => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.title}</td>

                            <td>{product.category}</td>

                            <td>${product.price}</td>

                            <td>{product.rating}</td>

                            <td>{product.stock}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Home;