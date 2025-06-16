import React from 'react';
import { useDispatch } from 'react-redux';
import { setEditingWidget } from '../reducers';
import { 
  AreaChart, Area, 
  BarChart, Bar, 
  LineChart, Line,
  PieChart, Pie, Cell,
  ScatterChart, Scatter, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface WidgetProps {
  id: string;
  name: string;
}

// Sample data for charts
const data = [
  { name: 'Jan', value: 400, pv: 2400, uv: 4000, amt: 2400 },
  { name: 'Feb', value: 300, pv: 1398, uv: 3000, amt: 2210 },
  { name: 'Mar', value: 200, pv: 9800, uv: 2000, amt: 2290 },
  { name: 'Apr', value: 278, pv: 3908, uv: 2780, amt: 2000 },
  { name: 'May', value: 189, pv: 4800, uv: 1890, amt: 2181 },
  { name: 'Jun', value: 239, pv: 3800, uv: 2390, amt: 2500 },
  { name: 'Jul', value: 349, pv: 4300, uv: 3490, amt: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Widget: React.FC<WidgetProps> = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Edit widget clicked', id);
    e.stopPropagation();
    e.preventDefault();
    
    // Dispatch with a slight delay to ensure event propagation is complete
    setTimeout(() => {
      console.log('Dispatching setEditingWidget action with id:', id);
      dispatch(setEditingWidget(id));
    }, 0);
  };

  const renderWidget = () => {
    switch (name) {
      case 'Area Chart':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'Bar Chart':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'Line Chart':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'Pie Chart':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'Scatter Plot':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="uv" name="UV" />
              <YAxis type="number" dataKey="pv" name="PV" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Values" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      case 'Radar Chart':
        return (
          <ResponsiveContainer width="100%" height="85%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar name="Value" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      case 'Data Table':
        return (
          <div style={{
            height: "85%", 
            overflow: "auto", 
            padding: "10px",
            backgroundColor: "#f9f9f9"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Month</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Value</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>PV</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>UV</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.value}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.pv}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.uv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div>Widget Not Found</div>;
    }
  };

  return (
    <div className="widget" style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <div className="grid-item__title" style={{ 
        cursor: "move", 
        padding: "10px", 
        background: "#f0f0f0", 
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span>{name}</span>
        <button 
          onClick={handleEdit}
          style={{ 
            background: "#4CAF50", 
            border: "none",  
            color: "white", 
            padding: "5px 10px", 
            borderRadius: "3px",
            cursor: "pointer" 
          }}
        >
          Edit
        </button>
      </div>
      {renderWidget()}
    </div>
  );
};

export default Widget;
