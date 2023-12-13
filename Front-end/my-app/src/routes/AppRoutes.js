import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Articles from "../pages/AllArticles";


function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/articles"
                        element={
                            <Articles />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRoutes;
