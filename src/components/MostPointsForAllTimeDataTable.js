function MostPointsForAllTimeDataTable({data}) {
    const playerData = data.reduce((players, row) => {
        const playerKey = row[0];

        if(!players[playerKey]) {
            players[playerKey] = [row[0], row[1], 0];
        }

        players[playerKey][2] += +row[3];

        return players;
    }, {});

    const sortedPlayerData = Object.values(playerData).sort((a, b) => {
        return b[2] - a[2];
    });

    return (
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
                {sortedPlayerData.map((row, index) => {
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
    );
}

export default MostPointsForAllTimeDataTable;