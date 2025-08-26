import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "8rem", margin: 0, color: "#1890ff" }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "10px 0", color: "#333" }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#1890ff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
