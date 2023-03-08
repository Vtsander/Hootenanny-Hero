import React from "react";
import "./budget.css";
import { PieChart, Pie, Cell} from "recharts";
import LoggedInNavbar from './LoggedInNavbar';


const BudgetPieChart = () => {
  const data = [
    { name: "Florals", value: 10000},
    { name: "Catering", value: 10000},
    { name: "Decor", value: 10000},
    { name: "Dress", value: 10000},
    { name: "Misc", value: 10000},
  ];
  
const COLORS = ['#672762', '#d321c6','#cd64c7',  '#ea9fe5', '#543152'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div style={{textAlign: "center"}}>
     <LoggedInNavbar />
      <h1>Calculated Budget</h1>
      <div className="Budget">
      <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default BudgetPieChart;