import React from "react";
import "./SearchInput.css";
import { Form } from "react-bootstrap";

const SearchInput = ({ search, onSearchChanges }) => {
  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => {
          onSearchChanges(e.target.value);
        }}
        style={{ width: "400px" }}
      />
    </Form>
  );
};

export default SearchInput;
