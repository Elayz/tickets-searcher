import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import AviaService from "./apiSerwise";
import Header from "./components/header/header";
import ContentSection from "./components/contentSection/contentSection";


const root = ReactDOM.createRoot(document.getElementById('root'));
// const api  = new AviaService()
// api.getInfo()
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))


const Main = () => {
    return (
    <div>
        <Header></Header>
        <ContentSection></ContentSection>
    </div>
    )
}

root.render(
    <Main></Main>
);
