import React from "react";
import '../stylesheet/Admin.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'BJP',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'AAP',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'TMC',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'CPM',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'CONG',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'BSP',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'OTHERS',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Body = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="chart-area">
                            <h6>VOTING PROGRESSING POLL</h6><hr/>
                            <ResponsiveContainer width="100%" height="80%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="pv" fill="#8884d8" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;