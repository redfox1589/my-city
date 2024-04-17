import React from "react";
import Map from "../components/Map";

const Places = () => {
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
                Интересные места в Саранске.
            </h1>
            <Map />
        </div>
    );
};

export default Places;
