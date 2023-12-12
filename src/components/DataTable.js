import { useLocation } from "react-router-dom";

function DataTable() {
    const location = useLocation();
    const data = location.state["data"];
    
    return (
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Time Played (Seconds)</th>
                        <th>Scored Points</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;