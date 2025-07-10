import React, { useState } from "react";
import Header from "../Component/Header/Header";
import Kategori from "../Component/Kategori/Kategori";
import { Col, Row } from "react-bootstrap";
import ListProduk from "../Component/List Produk/ListProduk";
import SearchInput from "../Component/Search/SearchInput";
import "./Home.css";

const Home = () => {
  const [kategoriSelected, setKategoriSelected] = useState(""); // simpan slug kategori
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <div className="main-section">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md={10} className="p-4">
            <h3 style={{ paddingLeft: "8px" }}>Kategori Produk</h3>
            <div className="fitur">
              <Kategori onKategoriSelected={setKategoriSelected} />
              <SearchInput search={search} onSearchChanges={setSearch} />
            </div>
            <ListProduk kategori={kategoriSelected} search={search} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
