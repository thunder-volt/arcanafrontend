import "../styles/homepage.css";
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Line, Scatter, RingProgress, DualAxes, Gauge } from '@ant-design/plots';

const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return <Line {...config} />;
};

const DemoScatter = () => {
    const data = [
        { x: 1, y: 4.181 },
        { x: 2, y: 4.665 },
        { x: 3, y: 5.296 },
        { x: 4, y: 5.365 },
        { x: 5, y: 5.448 },
        { x: 6, y: 5.744 },
        { x: 7, y: 5.653 },
        { x: 8, y: 5.844 },
        { x: 9, y: 6.362 },
        { x: 10, y: 6.38 },
        { x: 11, y: 6.311 },
        { x: 12, y: 6.457 },
        { x: 13, y: 6.479 },
        { x: 14, y: 6.59 },
        { x: 15, y: 6.74 },
        { x: 16, y: 6.58 },
        { x: 17, y: 6.852 },
        { x: 18, y: 6.531 },
        { x: 19, y: 6.682 },
        { x: 20, y: 7.013 },
        { x: 21, y: 6.82 },
        { x: 22, y: 6.647 },
        { x: 23, y: 6.951 },
        { x: 24, y: 7.121 },
        { x: 25, y: 7.143 },
        { x: 26, y: 6.914 },
        { x: 27, y: 6.941 },
        { x: 28, y: 7.226 },
        { x: 29, y: 6.898 },
        { x: 30, y: 7.392 },
        { x: 31, y: 6.938 },
    ];
    const config = {
        data,
        xField: 'x',
        yField: 'y',
        size: 5,
        pointStyle: {
            stroke: '#777777',
            lineWidth: 1,
            fill: '#5B8FF9',
        },
        regressionLine: {
            type: 'quad', // linear, exp, loess, log, poly, pow, quad
        },
    };

    return <Scatter {...config} />;
};

const DemoDualAxes = () => {
    const uvBillData = [
        {
            time: '2019-03',
            value: 350,
            type: 'uv',
        },
        {
            time: '2019-04',
            value: 900,
            type: 'uv',
        },
        {
            time: '2019-05',
            value: 300,
            type: 'uv',
        },
        {
            time: '2019-06',
            value: 450,
            type: 'uv',
        },
        {
            time: '2019-07',
            value: 470,
            type: 'uv',
        },
        {
            time: '2019-03',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-04',
            value: 300,
            type: 'bill',
        },
        {
            time: '2019-05',
            value: 250,
            type: 'bill',
        },
        {
            time: '2019-06',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-07',
            value: 362,
            type: 'bill',
        },
    ];
    const transformData = [
        {
            time: '2019-03',
            count: 800,
        },
        {
            time: '2019-04',
            count: 600,
        },
        {
            time: '2019-05',
            count: 400,
        },
        {
            time: '2019-06',
            count: 380,
        },
        {
            time: '2019-07',
            count: 220,
        },
    ];
    const config = {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
                isGroup: true,
                seriesField: 'type',
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    };
    return <DualAxes {...config} />;
};

const DemoRingProgress = () => {
    const config = {
        height: 200,
        width: 200,
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
    };
    return <RingProgress {...config} />;
};

const DemoGauge = () => {
    const config = {
        percent: 0.75,
        range: {
            color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: '36px',
                    color: '#4B535E',
                },
                formatter: () => '70%',
            },
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '44px',
                    color: '#4B535E',
                },
                formatter: () => '加载进度',
            },
        },
    };
    return <Gauge {...config} />;
};

const data = [
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
    {
        name: "London",
        opening: 9,
        closing: 17,
    },
]

const Homepage = () => {
    return (
        <>
            <div className="nav-bar"> <div className="brand">Arcana</div> <div className="left panel">
                <div className="icons"><a href="/list">Link</a></div>
                <div className="icons"><a href="">List</a></div>
                <div className="icons"><a href="">List</a></div>
            </div>
            </div>
            <div className='container'>
                <div className='left-bar'> {data.map((items) => {
                    return <div className="bar">
                        <div className="stock-name">{items.name}</div>
                        <div className="price"><div className="stock-closing">{items.closing}</div>
                            <div className="stock-opening">{items.opening}</div></div>

                    </div>
                })}</div>
                <div className='center-bar'>
                    <div className="line"><DemoLine /></div>
                    <div className="line"><DemoDualAxes /></div>
                </div>
                <div className='right-bar'>
                    {/* <div className="scatter"><DemoScatter /></div> */}
                    <div className="scatter">
                        <DemoRingProgress />
                    </div>
                    <div className="scatter">
                        <DemoDualAxes />
                    </div>
                    <div className="scatter">
                        <DemoGauge />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage