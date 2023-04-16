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
            name: "KELYA",
            closing: 16.81,
            volume: 107190,
            date: "2023-04-13",
            price_cng: 1.326,
            RSI: 77.87
        },
        {
            name: "AIN",
            closing: 90.97,
            volume: 78413,
            date: "2023-04-13",
            price_cng: 1.11,
            RSI: 58.64
        },
        {
            name: "BIG",
            closing: 11,
            volume: 1658160,
            date: "2023-04-13",
            price_cng: 0.365,
            RSI: 59.68
        },
        {
            name: "CAKE",
            closing: 32.79,
            volume: 1144315,
            date: "2023-04-13",
            price_cng: -0.787,
            RSI: 38.694
        },
        {
            name: "DHR",
            closing: 254.41,
            volume: 175486,
            date: "2023-04-13",
            price_cng: 1.77,
            RSI: 68.44
        },
        {
            name: "ETD",
            closing: 26.83,
            volume: 119540,
            date: "2023-04-13",
            price_cng: 0.11,
            RSI: 51.59
        },
        {
            name: "FMC",
            closing: 123.85,
            volume: 722789,
            date: "2023-04-13",
            price_cng: 1.1,
            RSI: 68.08
        },
        {
            name: "GHG",
            closing: 4.55,
            volume: 10315,
            date: "2023-04-13",
            price_cng: 0,
            RSI: 54.135
        },
        {
            name: "",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        },
        {
            name: "London",
            closing: 17,
            volume: "hjb",
            date: 0.5,
            price_cng: "vhcjf",
            RSI: "uytcyu"
        }
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