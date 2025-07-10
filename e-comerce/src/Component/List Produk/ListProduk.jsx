import React from "react";
import "./ListProduk.css";
import { Row } from "react-bootstrap";
import Card from "../Card/Card";

const ListProduk = ({ kategori, search }) => {
  return (
    <div className="list-produk" style={{ paddingTop: "20px" }}>
      <Row>
        <Card kategori={kategori} search={search} />
      </Row>
    </div>
  );
};

export default ListProduk;
