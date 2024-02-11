import { get, ref} from 'firebase/database';
import { firebase_database } from '../firebase/config';
import { useEffect, useState } from 'react';

export default function Test() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(firebase_database, 'users'));
            if (snapshot.exists()) {
                const usersData = snapshot.val();
                const usersArray = Object.keys(usersData).map(key => ({
                    id: key,
                    ...usersData[key]
                }));
                setUsers(usersArray);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <p>Created At: {user.createdAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
