import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Grid } from "@mui/material";

import Table from "./Table";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [userCount , setUserCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    async function fetchUsers() {
        await axios
            .get(
                `${
                    import.meta.env.VITE_URL
                }/admin/user/all?page=${currentPage}&pageSize=${pageSize}`
            )
            .then((res) => {
                setUsers(res.data.users);
                setUserCount(res.data.userPages);
                setTotalPages(Math.ceil(res.data.userPages / pageSize));
            });
    }

    function handlePageChange(event, page) {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

    function handleDelete(index) {
        console.log(index);
    }

    return (
        <>
            <h2>Total users: {userCount}</h2>
            <br />
            <Grid container spacing={2}>
                <Grid container spacing={2}>
                    <Table data={users} onDelete={handleDelete} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Pagination
                            count={totalPages}
                            shape="rounded"
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default UsersPage;
