import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is an example colocation of next.js</p>
      <p> url: /dashboard</p>
      <LineChart />
      <BarChart />
    </div>
  );
}