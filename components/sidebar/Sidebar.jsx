import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

const Sidebar = ({ drawer }) => {
  useEffect(() => {}, [drawer]);
  return (
    <>
      {drawer && (
        <Col
          md={3}
          sm={6}
          xs={12}
          style={{ height: "100vh", backgroundColor: "black" }}
        >
          sidebar
        </Col>
      )}
    </>
  );
};

export default Sidebar;
