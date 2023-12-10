function MostPointsInSingleGameDataTable({data}) {
    const sortedData = data.sort((a, b) => {
        return b[3] - a[3];
    });

    return (
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
    );
}

export default MostPointsInSingleGameDataTable;