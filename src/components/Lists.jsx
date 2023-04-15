import React, { useState, useEffect } from 'react'
import "../styles/homepage.css";
import "../styles/list.css";
import { Area } from '@ant-design/plots';

const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            range: [0, 1],
            tickCount: 5,
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
        },
    };

    return <Area {...config} />;
};

const Lists = () => {
    const data = [
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
        {
            name: "London",
            opening: 9,
            closing: 17,
            percentage: 0.5,
        },
    ]

    return (
        <>
            <div className="nav-bar"> <div className="brand">Arcana</div> <div className="left panel">
                <div className="icons"><a href="/list">Link</a></div>
                <div className="icons"><a href="">List</a></div>
                <div className="icons"><a href="">List</a></div>
            </div>
            </div>
            <div className='list-body'>
                <div className="pricelist">
                    <div className="list"><div className="list-name">Name</div>
                        <div className="list-opening">Opening</div>
                        <div className='list-closing'>Closing</div>
                        <div className="list-percentage">Percentage</div>
                        <div className="list-date">Date</div>
                    </div>
                    <div className='inner'>
                        {data.map((items, index) => {
                            return <div className="list">
                                <div className="list-name">{items.name}</div>
                                <div className="list-opening">{items.opening}</div>
                                <div className='list-closing'>{items.closing}</div>
                                <div className="list-percentage">{items.percentage}</div>
                                <div className="list-date">24/03/2023</div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="chart"><DemoArea /></div>
            </div>
        </>
    )
}

export default Lists