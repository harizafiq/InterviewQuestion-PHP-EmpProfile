import Form from './Form';
import { useState, useEffect } from 'react';

function List() {
    const [stafs, setStafs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        setIsLoading(true);
        fetch('http://localhost:8000/api/infoStaf')
            .then(response => response.json())
            .then(data => {
                setStafs(data);
                setIsError(null);
                setIsLoading(false);
            })
            .catch((e) => {
                console.log(e.message);
                setIsError('There is a problem with fetching data. Please try again in a minute');
            })
            .finally();
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      }, []);
    return (
        <>
            <table>
                <caption>List of stafs</caption>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Date of Birth
                        </th>
                        <th>
                            Martial Status
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone No
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Nationality
                        </th>
                        <th>
                            Hire Date
                        </th>
                        <th>
                            Department
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stafs.map((staf) => 
                        <tr key={staf.id}>
                            <td>
                                {staf.name}
                            </td>
                            <td>
                                {staf.gender === 1 ? 'Male' : 'Female'}
                            </td>
                            <td>
                                {staf.date_birth}
                            </td>
                            <td>
                                {staf.martial_status === 0 ? 'Single' : 'Married'}
                            </td>
                            <td>
                                {staf.email}
                            </td>
                            <td>
                                {staf.phone_no}
                            </td>
                            <td>
                                {staf.address}
                            </td>
                            <td>
                                {staf.nationality}
                            </td>
                            <td>
                                {staf.hire_date}
                            </td>
                            <td>
                                {staf.department}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {isLoading && <article aria-busy="true"></article>}
            {isError && <article style={{
                backgroundColor: "#e52b50",
                color: "white"
                }}>{isError}</article>}
        </>
    )
}
export default List;