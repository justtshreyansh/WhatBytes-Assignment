// UpperFilter.jsx
import React, { useState } from "react";
import { Card, Checkbox, Slider, Typography } from "antd";
import "./UpperFilter.css";
import FilterPanel from "./FilterPanel";

const { Title, Text } = Typography;

const UpperFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    { label: "All", value: "All" },
    { label: "Electronics", value: "Electronics" },
    { label: "Clothing", value: "Clothing" },
    { label: "Home", value: "Home" },
  ];

  const handleCategoryChange = (checkedValues) => {
    setSelectedCategories(checkedValues);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
     
 <Card className="upper-filter-card" bordered={false}>
      <Title level={4} className="filter-title">Filters</Title>

    
      <div className="filter-section">
        <Text className="filter-label">Category</Text>
        <Checkbox.Group
          options={categories}
          value={selectedCategories}
          onChange={handleCategoryChange}
          className="checkbox-group"
        />
      </div>

     
      <div className="filter-section">
        <Text className="filter-label">Price</Text>
        <div className="price-values">
          <Text className="price-text">${priceRange[0]}</Text>
          <Text className="price-text">${priceRange[1]}</Text>
        </div>
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceChange}
          marks={{ 0: <span className="slider-mark">0</span>, 1000: <span className="slider-mark">1000</span> }}
          trackStyle={{ backgroundColor: "white" }}
          handleStyle={[{ borderColor: "white" }, { borderColor: "white" }]}
          railStyle={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        />
      </div>
    </Card>
      
     
   

  );
};

export default UpperFilter;
