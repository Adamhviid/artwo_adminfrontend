import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Grid } from "@mui/material";

import Table from "./Table";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [postCount, setPostCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    async function fetchPosts() {
        await axios
            .get(
                `${
                    import.meta.env.VITE_URL
                }/admin/post/all?page=${currentPage}&pageSize=${pageSize}`
            )
            .then((res) => {
                setPosts(res.data.posts);
                setPostCount(res.data.postPages);
                setTotalPages(Math.ceil(res.data.postPages / pageSize));
            });
    }

    function handlePageChange(event, page) {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

    function handleDelete(id) {
        axios
            .post(`${import.meta.env.VITE_RABBITMQ_URL}/delete-post`, {
                id: id,
            })
            .then(() => {
                console.log("Post deleted" + id);
                fetchPosts();
            });
    }

    return (
        <>
            <h2>Total posts: {postCount}</h2>
            <br />
            <Grid container spacing={2}>
                <Grid container spacing={2}>
                    <Table data={posts} onDelete={handleDelete} />
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

export default PostsPage;
