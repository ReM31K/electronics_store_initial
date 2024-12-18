import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



const Product = ({ product }) => {
    console.log("Product Image:", product.image);
    console.log("Full Product Object:", product);




    return (
        <div className="bg-black text-white min-h-screen">
            <Header page="product" /> 

            <main className="px-6 py-8">
                <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
                    <img
                        src={"../" + product.image}
                        alt={product.name}
                        className="w-full h-64 object-contain mb-6 bg-gray-800 rounded-lg"
                    />

                    <p className="text-gray-400 mb-4">Description: {product.description}</p>
                    {product.type && (
                        <p className="text-gray-400 mb-4">Category: {product.type}</p>
                    )}
                    {product.manufacturer && (
                        <p className="text-gray-400 mb-4">Manufacturer: {product.manufacturer}</p>
                    )}
                    <p className="text-gray-400 mb-4">Stock: {product.stock} items</p>
                    <p className="text-2xl font-bold mb-6">Price: ${product.price}</p>
                    <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600">
                        Buy Now
                    </button>
                </div>
            </main>

            <Footer page="home" />
        </div>
    );
};

export default Product;
