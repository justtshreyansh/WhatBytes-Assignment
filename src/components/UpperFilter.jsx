import React, { useContext } from "react";
import { Card, Checkbox, Slider, Typography } from "antd";
import { Context } from "../context/Context";


const { Title, Text } = Typography;

const UpperFilter = () => {
  const { filters, setFilters } = useContext(Context);

  const categories = [
    { label: "All", value: "All" },
    { label: "Electronics", value: "Electronics" },
    { label: "Clothing", value: "Clothing" },
    { label: "Home", value: "Home" },
  ];

  const handleCategoryChange = (checkedValues) => {
    setFilters({ ...filters, categories: checkedValues });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, maxPrice: value });
  };

  return (
    <Card className="upper-filter-card" bordered={false}>
      <Title level={4} className="filter-title">Filters</Title>

      <div className="filter-section">
        <Text className="filter-label">Category</Text>
        <Checkbox.Group
          options={categories}
          value={filters.categories || []} 
          onChange={handleCategoryChange}
          className="checkbox-group"
        />
      </div>

      <div className="filter-section">
        <Text className="filter-label">Price</Text>
        <div className="price-values">
          <Text className="price-text">${filters.maxPrice || 0}</Text> 
        </div>
        <Slider
          min={0}
          max={1000}
          value={filters.maxPrice || 0} 
          onChange={handlePriceChange}
          marks={{ 0: 0, 1000: 1000 }}
          trackStyle={{ backgroundColor: "#fff" }}
          handleStyle={[{ borderColor: "#fff" }, { borderColor: "#fff" }]}
          railStyle={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        />
      </div>
    </Card>
  );
};

export default UpperFilter;
