import React from "react";
import Posts from "../components/Posts";
import Users from "../components/Users";

const FrontPage = () => {
    return (
        <div>
            <h1>Artwo Admin Panel</h1>
            <Posts />
            <Users />
        </div>
    );
};

export default FrontPage;
