import React from "react";
import Weather from "../components/Weather";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <h1>
                Город Саранск.
            </h1>
            <Weather />
        </div>
    );
};



export default Home;
