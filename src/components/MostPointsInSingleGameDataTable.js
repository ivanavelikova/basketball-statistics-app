import { useLocation } from "react-router-dom";

function MostPointsInSingleGameDataTable() {
    const location = useLocation();
    const data = location.state["data"];
    
    const sortedData = data.sort((a, b) => {
        return b[3] - a[3];
    });

    return (
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Time Played (Seconds)</th>
                        <th>Scored Points</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
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

export default MostPointsInSingleGameDataTable;