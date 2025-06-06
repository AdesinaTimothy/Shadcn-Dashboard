import AppAreaCharts from "@/components/AppAreaCharts";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import Todo from "@/components/Todo";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart/>

      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
        </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><Todo /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaCharts />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Contents"/></div>
    </div>
  )
}
