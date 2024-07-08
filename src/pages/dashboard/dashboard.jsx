import Banner from "./components/banner";
import Header from "../../Layout/header";
import { useState, useEffect } from "react";
import { axiosFireApi } from "../../services/config";
import Graph from "./components/Graph";
import Transactions from "./components/transactions";
const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosFireApi("me", "get");
        console.log("dashboard", response);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className="grid lg:grid-cols-1  grid-cols-4 grid-row-2  border rounded-xl mx-8 my-4 bg-white">
        <Banner />
      </div>
      <div className="grid grid-cols-2 mx-8 my-4 gap-x-2">
        <div className="col-span-1 bg-white border rounded-lg  ">
          <Graph transactions={data?.data?.data?.user?.transactions} />
        </div>
        <div className="col-span-1 border bg-white rounded-lg">
          <Transactions transactions={data?.data?.data?.user?.transactions} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
