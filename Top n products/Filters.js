import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState(''); // corrected missing closing quotation mark
  const [minRating, setMinRating] = useState('');

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    onFilterChange({ company, category, minPrice, maxPrice, minRating });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange({ company, category, minPrice, maxPrice, minRating });
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onFilterChange({ company, category, minPrice, maxPrice, minRating });
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    onFilterChange({ company, category, minPrice, maxPrice, minRating });
  };

  const handleMinRatingChange = (event) => {
    setMinRating(event.target.value);
    onFilterChange({ company, category, minPrice, maxPrice, minRating });
  };

  // Define available companies and categories based on API responses
  const companies = ['ANZ', 'FLP', 'SNP', 'HYN', 'ΑΖΟ']; // Example company list
  const categories = ['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', '...']; // Example category list

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="company-select-label">Company</InputLabel>
        <Select
          labelId="company-select-label"
          id="company-select"
          value={company}
          label="Company"
          onChange={handleCompanyChange}
        >
          {companies.map((company) => (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Add similar Select components for minPrice, maxPrice, and minRating */}

    </div>
  );
};

export default Filters;
