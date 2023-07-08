import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getData = () => {
        const url = "https://api.github.com/users";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };
    // console.log(users);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1 className="text-dark display-6 fw-bold">Github Users</h1>
            <div className="row gap-3 mx-auto">
                {users.map((user) => {
                    // console.log(user);
                    const { id, login, avatar_url,url } = user;
                    return (
                        <div key={id} className="col">
                            <div className="card mx-auto border-0">
                                <div className="img-container">
                                <img
                                    src={avatar_url}
                                    className="card-img-top rounded-circle"
                                    alt="github_user"
                                />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{login}</h5>
                                    <a className="btn btn-outline-dark px-1" target="_blank" href={url}>{url}</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;