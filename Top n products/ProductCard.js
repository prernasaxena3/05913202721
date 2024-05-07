import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const { productName, price, rating, discount, availability } = product;
  const discountDisplay = discount > 0 ? `${discount}% off` : '';
  const availabilityText = availability === 'yes' ? 'In Stock' : 'Out of Stock';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/200/300?random=${productName}`}
        alt={productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price} {discountDisplay}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating} stars
        </Typography>
        <Typography variant="body2" color={availability === 'yes' ? 'text.primary' : 'error.main'}>
          {availabilityText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
