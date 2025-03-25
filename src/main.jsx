import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="aboutus" element={<AboutUs />} />

                <Route path="posts">
                    <Route index element={<Posts />} />
                    <Route path=":id" element={<PostDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
