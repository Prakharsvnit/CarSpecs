import React from 'react';
import { Container, Typography } from '@mui/material';
import "../scss/header.scss";

const Header: React.FC = () => {
  return (
    <Container className='header-container' maxWidth="xl">
      <Typography className='header-text' variant="h4">Vehicles</Typography>
    </Container>
  );
};

export default Header;
