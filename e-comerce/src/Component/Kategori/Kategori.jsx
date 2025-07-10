import React, { useEffect, useState } from "react";
import "./Kategori.css";
import axios from "axios";
import { Button } from "react-bootstrap";

const Kategori = ({ onKategoriSelected }) => {
  const [kategori, setKategori] = useState([]);
  const [kategoriSelected, setKategoriSelected] = useState("");

  const getKategori = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/categories`
      );
      const hanya5Kategori = response.data.slice(0, 5); // ✅ hanya ambil 5
      console.log(hanya5Kategori); // ✅ log untuk pastikan
      setKategori(hanya5Kategori);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickKategoriSelected = (slug) => {
    setKategoriSelected(slug); // ⬅️ simpan slug
    onKategoriSelected(slug); // ⬅️ kirim ke parent
  };

  useEffect(() => {
    getKategori(); // ⬅️ ambil kategori sekali
  }, []);

  return (
    <div>
      {kategori.map((data, index) => (
        <Button
          key={index}
          className={`m-2 ${
            kategoriSelected === data.slug
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => onClickKategoriSelected(data.slug)}
          type="button"
          style={{ color: "white" }}
        >
          {data.name}
        </Button>
      ))}
    </div>
  );
};

export default Kategori;
