import React,{useState,useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Heading ,Box, Spacer} from '@chakra-ui/react';

const IntensityChart = ({ data }) => {
  const [year, setYear] = useState(2017);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on the selected year
    const yearData = data.filter(item => item.start_year === year && item.intensity !== null);

    // Update the filteredData state
    setFilteredData(yearData);
  }, [year, data]);

  const intensityData = filteredData.map(item => item.intensity);
  const years = filteredData.map(item => item.start_year);

// Get the first 20 values from intensityData and years
const first20Intensities = intensityData.slice(0, 20);
const first20Years = years.slice(0, 20);


  const getColor = (value) => {
    const colors = [
      '#3498db',
      '#e74c3c',
      '#2ecc71',
      '#f39c12'
    ];
    const threshold = Math.max(...first20Intensities) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: first20Years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: first20Intensities.map((value) => getColor(value)),
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: first20Intensities,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        
        anchor: 'end',
        align: 'start',
        offset: -20,
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        shadowBlur: 10,
        shadowColor: 'white',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
          callback: (value) => value + '%',
        },
      },
    },
    animation: {
      duration: 4000,
      easing: 'easeInOutQuart', // Use a smooth easing function
      mode: 'progressive',
    },
  };

  return (
    <div style={{ margin: '50px', padding:"10px", fontFamily: 'Arial, sans-serif',  borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Box   
      p='4'
      >
         <Heading as="h2" mb={4}>Intensity Chart</Heading>
          <Spacer/>
          <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2025">2025</option>
            <option value="2028">2028</option>
            <option value="2030">2030</option>
            <option value="2035">2035</option>
            <option value="2040">2040</option>
            <option value="2050">2050</option>
          </select>
      </Box>
      <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default IntensityChart;