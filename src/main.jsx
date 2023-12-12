import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "@mui/material/Container";

/* import Nav from "./components/Nav"; */
import FrontPage from "./pages/FrontPage";
import UsersPage from "./components/Users";
import PostsPage from "./components/Posts";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        {/* <Nav /> */}
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </Container>
    </BrowserRouter>
);
