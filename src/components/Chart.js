import React, { useState, useEffect, useMemo, useCallback } from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart.css";
import "./Style.css";

const Chart = ({ habits }) => {
  const [labels, setLabels] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 260,
        hollow: {
          margin: 0,
          size: "10%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#4c2e2e", "#a15f22", "#6f3132", "#8d6b5f"],
    labels: [],
    legend: {
      show: true,
      floating: true,
      position: "right",
      offsetX: 150,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: "0px",
      },
      formatter: function (seriesName, opts) {
        const habitCountByType = habits.reduce((acc, habit) => {
          const habitType = habit.type || "Unknown";
          acc[habitType] = (acc[habitType] || 0) + 1;
          return acc;
        }, {});
        let res;
        if (habitCountByType[seriesName] == undefined) {
          res = 0;
        } else {
          res = habitCountByType[seriesName];
        }
        return seriesName + ":  " + res;
      },
      itemMargin: {
        vertical: 0,
      },
    },
    series: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  });

  const initializeHabitCounts = useCallback(() => {
    const habitCountByType = {};
    const possibleTypes = [
      "sport",
      "hobby",
      "study",
      "life",
      "health",
      "thought",
    ];

    possibleTypes.forEach((type) => {
      habitCountByType[type] = 0;
    });

    return habitCountByType;
  }, []);

  const habitCounts = useMemo(
    () => initializeHabitCounts(),
    [initializeHabitCounts]
  );

  useEffect(() => {
    const habitCountByType = habits.reduce(
      (acc, habit) => {
        const habitType = habit.type || "Unknown";
        acc[habitType] = (acc[habitType] || 0) + 1;
        return acc;
      },
      { ...habitCounts }
    );

    setLabels(Object.keys(habitCountByType));

    const updatedOptions = {
      ...options,
      labels: Object.keys(habitCountByType),
      series: Object.values(habitCountByType),
    };

    setOptions(updatedOptions);
  }, [habits, habitCounts]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={400}
      />
    </div>
  );
};

export default Chart;