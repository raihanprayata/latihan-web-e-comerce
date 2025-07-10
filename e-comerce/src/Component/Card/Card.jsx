import React, { useEffect, useState } from "react";
import "./Card.css";
import { Button, Col } from "react-bootstrap";
import axios from "axios";

const Card = ({ kategori, search }) => {
  const [dataProduk, setDataProduk] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getProductByPage = async (pageNumber = 0) => {
    try {
      const limit = 8;
      const skip = pageNumber * limit;

      let url = "";

      if (search) {
        url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
      } else if (kategori) {
        url = `https://dummyjson.com/products/category/${kategori}?limit=${limit}&skip=${skip}`;
      } else {
        url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      }

      const response = await axios.get(url);
      setDataProduk(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      let url = "";

      if (search) {
        url = `https://dummyjson.com/products/search?q=${search}`;
      } else if (kategori) {
        url = `https://dummyjson.com/products/category/${kategori}`;
      } else {
        url = "https://dummyjson.com/products";
      }

      const response = await axios.get(url);
      const produk = response.data.products.slice(0, 20);
      setDataProduk(produk);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // reset data saat kategori atau search berubah
    getProductByPage(currentPage);
  }, [currentPage, kategori, search]);

  useEffect(() => {
    setCurrentPage(0); // panggil loadMoreProduk saat skip = 0
  }, [kategori, search]);
  return (
    <>
      {dataProduk.map((data, index) => (
        <Col md={3} key={index}>
          <div className="card-produk">
            <img
              src={data.images[0]}
              alt={data.title}
              style={{
                width: "100%",
                height: "240px",
                padding: "10px 10px 0 10px",
              }}
            />
            <div className="card-body">
              <h6 className="title-card-produk">{data.title}</h6>
              <p className="kategori-card-produk">{data.category}</p>
              <p className="harga-card-produk">$ {data.price}</p>
            </div>
          </div>
        </Col>
      ))}

      <Col md={12} className="text-center mt-4">
        <Button
          className="me-2"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </Button>
        <Button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</Button>
      </Col>
    </>
  );
};

export default Card;
