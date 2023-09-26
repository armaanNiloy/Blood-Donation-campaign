
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonation } from "../../utility/localstorage";






const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function Statistics() {
    const a = useLoaderData().length;
    const b = getStoredDonation().length;
    const data = [
        { name: "Group A", value: a },
        { name: "Group B", value: b },
    ];
    
    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex justify-center items-center gap-10">
                <div className="flex items-center">
                    <h3 className="text-2xl mr-2">Your Donation</h3>
                    <hr className="border-t-8 border-[#FF444A] w-20" />
                </div>
                <div className="flex items-center">
                    <h3 className="text-2xl mr-2">Total Donation</h3>
                    <hr className="border-t-8 border-[#00C49F] w-20" />
                </div>
            </div>
        </div>
    );
}


export default Statistics;