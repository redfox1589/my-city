import React from "react";

const Map = () => {
    return (
        <>
            <div style={{position:"relative",overflow:"hidden"}}>
                <a href="https://yandex.ru/maps/42/saransk/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee","font-size":"12px",position:"absolute",top:"0px"}}>Саранск</a>
                <a href="https://yandex.ru/maps/geo/saransk/53105244/?ll=45.183939%2C54.187433&utm_medium=mapframe&utm_source=maps&z=13" 
                    style={{color:"#eee","font-size":"12px",position:"absolute",top:"14px"}}>Саранск — Яндекс Карты</a>
                <iframe src="https://yandex.ru/map-widget/v1/?ll=45.183939%2C54.187433&mode=poi&poi%5Bpoint%5D=45.183934%2C54.187435&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTI0NBJD0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQnNC-0YDQtNC-0LLQuNGPLCDQodCw0YDQsNC90YHQuiIKDVq8NEIV779YQg%2C%2C&z=13" 
                    width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe>
            </div>
        </>
    );
};

export default Map;