import './tableElement.css';

export const TableElement = ({ rows, keysMap }) => {

    const headers = Object.values(keysMap);
    const keys = Object.keys(keysMap);

    const headersTable = headers.map(((item, index) =>
        <th key = {index * 2}>
            {item}
        </th>
    ));

    const rowsTable = rows.map(row => (
        <tr key = {row.id}>
            {keys.map((key, index) => (
                <td key = {row.id * index}> {row[key]}</td>
            ))}
        </tr>
    ))

    return (
        <section className = "container table-container">
            <table>
                <thead>
                    <tr>
                        {headersTable}
                    </tr>
                </thead>
                <tbody className='table-container_tbody'>
                    {rowsTable}
                </tbody>
            </table>
        </section>
    )
}