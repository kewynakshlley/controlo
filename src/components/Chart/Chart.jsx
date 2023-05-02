import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const chartPointValues = props.charts.map((point) => point.value);
  const totalMax = Math.max(...chartPointValues);

  console.log(props);

  return (
    <div className="chart">
      {props.charts.map((chart) => (
        <ChartBar
          key={chart.label}
          value={chart.value}
          maxValue={totalMax}
          label={chart.label}
        />
      ))}
    </div>
  );
};

export default Chart;
