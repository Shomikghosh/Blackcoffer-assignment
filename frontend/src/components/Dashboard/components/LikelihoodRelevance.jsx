import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const LikelihoodRelevance = ({ data }) => {
    // Filter out records where either likelihood or relevance is null
    const filteredData = data.filter(item => item.likelihood !== null && item.relevance !== null);

    // // Sort the filtered data by relevance in descending order
    // const sortedData = filteredData.sort((a, b) => b.relevance - a.relevance);
  
    // Take the top 20 values
    const top20Data = filteredData.slice(0, 20);

  const chartData = {
    datasets: [
      {
        label: 'Relevance',
        data: top20Data.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5
        }),
        )
      },
      {
        label: 'Likelihood ',
        data: top20Data.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        }),
        )
      }
    ]
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Likelihood',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Relevance',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box >
      <Heading as="h2" mb={4}>Likelihood-Relevance Chart</Heading>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRelevance;