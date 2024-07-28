import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PetList from '../components/PetList';

const HomePage = () => {
  const [searchParams, setSearchParams] = useState({});

  return (
    <div className="home-page container mx-auto p-4">
      <SearchForm onSearch={setSearchParams} />
      <PetList {...searchParams} />
    </div>
  );
};

export default HomePage;
