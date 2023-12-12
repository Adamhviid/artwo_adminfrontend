import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div>
                Artwo Admin 
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/users">Users</Link>
                </button>
                <button>
                    <Link to="/posts">Posts</Link>
                </button>
            </div>
        </nav>
    );
};

export default Nav;
