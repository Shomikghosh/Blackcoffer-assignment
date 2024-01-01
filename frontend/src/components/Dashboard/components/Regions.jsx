import React from 'react';
import {  Pie } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const Regions = ({ data }) => {
  // Filter out items where region is an empty string
  const filteredData = data.filter(item => item.region !== "");

  const regionCounts = filteredData.reduce((counts, item) => {
    counts[item.region] = (counts[item.region] || 0) + 1;
    return counts;
  }, {});

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0', '#3F51B5'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0', '#3F51B5'],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Regions Distribution
      </Heading>
      <Pie data={chartData} />
    </Box>
  );
};

export default Regions;
