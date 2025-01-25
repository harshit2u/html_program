import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4400/")
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Weather Data from Cities
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {weatherData.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={item.city_img}
                alt={item.city}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h2 style={{ marginBottom: "10px" }}>{item.city}</h2>
                <h3 style={{ margin: "5px 0" }}>
                  Temperature: {item.temperature}°C
                </h3>
                <p style={{ margin: "5px 0" }}>Pressure: {item.pressure}</p>
                <p style={{ margin: "5px 0" }}>Wind Speed: {item.wind}</p>
                <img
                  src={item.logo}
                  alt="Weather Logo"
                  style={{ width: "50px", height: "50px", marginTop: "10px" }}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

export default App;
