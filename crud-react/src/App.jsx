import React from 'react';
import Article from './Article';
import AddArticle from './AddArticle';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditArticles from './EditArticles';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Article />}></Route>

                    <Route path="/AddArticle" element={< AddArticle />}></Route>

                    <Route path="/EditArticle/:id" exact element={<EditArticles />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;