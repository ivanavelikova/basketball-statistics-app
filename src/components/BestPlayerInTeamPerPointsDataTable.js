import { useLocation } from "react-router-dom";

function BestPlayerInTeamPerPointsDataTable() {
    const location = useLocation();
    const data = location.state["data"];

    const teamData = data.reduce((teams, row) => {
        const teamKey = row[1];
     
        if(!teams[teamKey]) {
            teams[teamKey] = [];
        }
     
        teams[teamKey].push([row[0], row[1], row[3]]);
     
        return teams;
    }, {});
     
    const bestPlayers = Object.keys(teamData)
    .map(teamKey => {
        const players = teamData[teamKey];

        players.sort((a, b) => b[2] - a[2]);

        return players[0];
    })
    .sort((a, b) => {
        return b[2] - a[2];
    });

    return (
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Total Scored Points</th>
                    </tr>
                </thead>
                <tbody>
                    {bestPlayers.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BestPlayerInTeamPerPointsDataTable;