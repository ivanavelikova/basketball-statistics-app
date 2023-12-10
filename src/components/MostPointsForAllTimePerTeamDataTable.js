function MostPointsForAllTimePerTeamDataTable({data}) {
    const teamData = data.reduce((teams, row) => {
        const teamKey = row[1];

        if(!teams[teamKey]) {
            teams[teamKey] = [row[1], 0];
        }

        teams[teamKey][1] += +row[3];

        return teams;
    }, {});

    const sortedTeamData = Object.values(teamData).sort((a, b) => {
        return b[1] - a[1];
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Team</th>
                    <th>Total Scored Points</th>
                </tr>
            </thead>
            <tbody>
                {sortedTeamData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default MostPointsForAllTimePerTeamDataTable;