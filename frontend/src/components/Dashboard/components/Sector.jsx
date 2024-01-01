import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const Sector = ({ data }) => {
  // Filter out items where region is an empty string
  const filteredData = data.filter(item => item.sector !== "");

  const sectorCounts = filteredData.reduce((counts, item) => {
    counts[item.sector] = (counts[item.sector] || 0) + 1;
    return counts;
  }, {});

  const chartData = {
    labels: Object.keys(sectorCounts),
    datasets: [
      {
        data: Object.values(sectorCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0', '#3F51B5','#795548', '#8BC34A', '#FF5722', '#607D8B', '#009688'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0', '#3F51B5','#4CAF50', '#FFC107', '#9E9E9E', '#FFEB3B', '#FF4081'],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Sector Distribution
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default Sector;
