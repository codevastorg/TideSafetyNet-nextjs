import { get, ref} from 'firebase/database';
import { firebase_database } from '../firebase/config';
import { useEffect, useState } from 'react';

export default function Test() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(firebase_database, 'records'));
            if (snapshot.exists()) {
                const recordsData = snapshot.val();
                const recordsArray = Object.keys(recordsData).map(key => ({
                    id: key,
                    ...recordsData[key]
                }));
                setRecords(recordsArray);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Records</h1>
            <ul>
                {records.map(record => (
                    <li key={record.id}>
                        <p>Date: {record.date}</p>
                        <p>City: {record.city}</p>
                        <p>Hours: {record.hours}</p>
                        <p>Value: {record.value}</p>
                        <p>Weather: {record.weather}</p>
                        <p>Wind: {record.wind}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
