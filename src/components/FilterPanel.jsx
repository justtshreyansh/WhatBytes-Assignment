import React, { useState } from "react";
import { Card, Checkbox, InputNumber, Button, Typography } from "antd";
import "./FilterPanel.css";

const { Text } = Typography;

const FilterPanel = () => {
  const categoriesList = ["All", "Electronics", "Clothing", "Home"];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState(1000);

  const handleCheckboxChange = (checkedValues) => setSelectedCategories(checkedValues);
  const handlePriceChange = (value) => setPrice(value);

  const handleApplyFilter = () => {
    console.log("Applied Categories:", selectedCategories);
    console.log("Applied Price:", price);
  };

  return (
    <Card className="filter-panel-card" bordered={false}>
      <Text strong className="filter-panel-label">Categories</Text>
      <Checkbox.Group
        options={categoriesList.map(c => ({ label: c, value: c }))}
        value={selectedCategories}
        onChange={handleCheckboxChange}
        className="filter-panel-checkbox-group"
      />

      <div className="filter-panel-price-section">
        <Text strong className="filter-panel-label">Price</Text>
        <InputNumber
          min={0}
          max={1000}
          value={price}
          onChange={handlePriceChange}
          className="filter-panel-price-input"
        />
      </div>

      <Button
        type="primary"
        className="filter-panel-apply-button"
        onClick={handleApplyFilter}
      >
        Apply Filter
      </Button>
    </Card>
  );
};

export default FilterPanel;
