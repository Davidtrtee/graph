import React from "react";
import ApexCharts from "react-apexcharts";

const Graph = ({ yAxis, xAxis, color, title, labelColor, labelValue }) => {
  const series = [
    {
      data: yAxis,
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false, // Скрыть верхнюю панель инструментов для чистого вида
      },
      background: 'transparent', // Прозрачный фон графика
    },
    plotOptions: {
      bar: {
        borderRadius: 10, // Закругленные углы для баров
        distributed: true, // Распределенное отображение баров
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.6,
        gradientToColors: undefined, // По умолчанию использует градиент к основному цвету
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: xAxis,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#333', // Цвет текста оси X
          fontSize: '14px', // Размер текста
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#333', // Цвет текста оси Y
          fontSize: '14px', // Размер текста
        },
      },
    },
    grid: {
      borderColor: '#e7e7e7', // Цвет границы сетки
      strokeDashArray: 5, // Тип линии границы
    },
    tooltip: {
      theme: "light", // Тема всплывающих подсказок
    },
  };

  return (
    <div className="graph-container m-3 p-3 bg-white rounded shadow-sm">
      <h4 className="text-center fw-bold">{title}</h4>
      <div className="d-flex justify-content-center my-2">
        <div
          className="label-indicator"
          style={{ height: "10px", width: "40px", backgroundColor: labelColor, borderRadius: '5px' }}
        ></div>
        <span className="ms-2">{labelValue}</span>
      </div>
      <div id="chart">
        <ApexCharts options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Graph;
