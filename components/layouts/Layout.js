import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "../sidebar/Sidebar";

export default function Layout({ children }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <Sidebar drawer={drawer} />
            <Col md={false} style={{ height: "100vh" }}>
              <div
                className="shadow py-3 px-2"
                onClick={() => setDrawer(!drawer)}
              >
                Next Bootstrap Optimized Boilerplate
              </div>
              {children}
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}
