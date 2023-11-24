
import { useMemo, useState } from "react";
import { users } from "../../server/UserData";
import { useDebounce } from "../../hooks/useDebounce";
import './style.css';

const FrameworksPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500)

    const handleSearchChange = (event) => setSearchTerm(event.target.value);

    const filteredUsers = useMemo( () => {
        return users.filter(user =>
            ['name', 'email', 'bio'].some(prop =>
                user[prop].toLowerCase().includes(debouncedSearch.toLowerCase())
            )
        );
    }, [ debouncedSearch ]) 


    return (
        <div className="frameworks-page">
            <h1>User Data</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            <div className="user-cards">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div key={user.id} className="user-card">
                            <strong>{user.name}</strong>
                            <p>Email: {user.email}</p>
                            <p>Bio: {user.bio}</p>
                        </div>
                    ))
                ) :  <p>No results found.</p>
            }
            </div>
        </div>
    );
};

export default FrameworksPage;
