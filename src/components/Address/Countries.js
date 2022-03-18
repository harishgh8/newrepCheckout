import React, { useState } from "react";
import { Select } from "@veneer/core";
import countryList from "./mockCountries.json";

const Countries = ({ value, onSelect }) => {
  const items = [
    { value: 1, label: "Item 1" },
    { value: 2, label: "Item 2" },
    { value: 3, label: "Item 3" },
    { value: 4, label: "Item 4" },
    { value: 5, label: "Item 5" },
  ];
  const [options, setOptions] = useState(countryList);
  const onSearch = (value) => {
    const filteredOptions = items.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };
  return (
    <Select
      required
      showSearch
      onSearch={onSearch}
      options={options}
      id="select-usage"
      label="Select Country"
      defaultValue="Canada"
      placement="bottom"
      helperTextVisibility="auto"
      onChange={(op) => onSelect(op.value)}
      onClear={() => onSelect("")}
      value={[value]}
    />
  );
};

export default Countries;
