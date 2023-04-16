import "../styles/homepage.css";
import React, { useState, useEffect } from 'react';
import { Line, Scatter, RingProgress, DualAxes, Gauge, Column } from '@ant-design/plots';
import { FcLineChart } from "react-icons/fc";
const DemoLine = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('http://ec2-13-231-143-65.ap-northeast-1.compute.amazonaws.com:8000/csvdata26')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'ds',
        yField: 'close',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 1).toFixed(1)}`,
            },
            max: 40,
            min: 0
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
        slider: {
            start: 0.75,
            end: 1,
        },
    };

    return <Line {...config} />;
};

// const DemoColumn = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         asyncFetch();
//     }, []);

//     const asyncFetch = () => {
//         fetch('http://ec2-13-231-143-65.ap-northeast-1.compute.amazonaws.com:8000/csvdata')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//                 console.log('fetch data failed', error);
//             });
//     };
//     const config = {
//         data,
//         xField: 'date',
//         yField: 'value',
//         seriesField: 'country',
//         slider: {
//             start: 0.1,
//             end: 0.9,
//         },
//     };

//     return <Column {...config} />;
// };

const DemoLine1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://ec2-13-231-143-65.ap-northeast-1.compute.amazonaws.com:8000/csvdata40 ')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'ds',
        yField: 'close',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
        slider: {
            start: 0.97,
            end: 1,
        },
    };

    return <Line {...config} />;
};

const DemoDualAxes = () => {
    const [csvdata, setCsvData] = useState([]);
    const csvData = async () => {
        const result = await fetch('http://ec2-13-231-143-65.ap-northeast-1.compute.amazonaws.com:8000/csvdata').then(async (res) => {
            console.log(res);
            let resp = await res.json();
            return resp;
        }).then((res) => {
            setCsvData(res);
            console.log(res)
            return res;
        })
    }

    useEffect(() => {
        csvData();
    }, [])
    const uvData = [];
    const transformData = []
    for (var i = 0; i < csvdata.length; i++) {
        uvData.push({
            time: csvdata[i].ds,
            value: csvdata[i].volume,
        });
    }

    const config = {
        // slider: {},
        meta: {
            time: {
                sync: false, // 开启之后 slider 无法重绘
            },
        },
        data: [uvData, transformData],
        xField: 'time',
        yField: ['value'],
        slider: {
            start: 0.99,
            end: 1,
        },
        geometryOptions: [
            {
                geometry: 'column',
                columnWidthRatio: 0.4,
            },
            {
                geometry: 'line',
                seriesField: 'name',
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
        percent: 0.932,
        range: {
            color: 'l(0) 0:#ff5349 1:red',
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
                formatter: () => '93.2%',
            },
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '44px',
                    color: '#4B535E',
                },
                formatter: () => 'Bearish',
            },
        },
    };
    return <Gauge {...config} />;
};

const data = [
    {
        name: "Name",
        closing: "closing",
        color: "black",
        percent_chng: "change",
        link: "/"
    },
    {
        name: "AIN",
        closing: 90.97,
        color: "green",
        percent_chng: "+1.11",
        link: "/"
    },
    {
        name: "BIG",
        percent_chng: "+0.37",
        color: "green",
        closing: 11,
        link: "/homepage2"
    },
    {
        name: "CAKE",
        percent_chng: "-0.79",
        color: "red",
        closing: 32.79,
        link: "/homepage3"
    },
    {
        name: "DHR",
        percent_chng: "+1.77",
        color: "green",
        closing: 254.41,
        link: "/homepage4"
    },
    {
        name: "ETD",
        percent_chng: "+2.99",
        color: "green",
        closing: 26.83,
        link: "/homepage5"
    },
    {
        name: "FMC",
        percent_chng: "+1.10",
        color: "green",
        closing: 123.85,
        link: "/homepage6"
    },
    {
        name: "GHG",
        percent_chng: "+0",
        color: "green",
        closing: 4.55,
        link: "/homepage7"
    },
    {
        name: "MDU",
        percent_chng: "-0.132",
        color: "red",
        closing: 30.07,
        link: "/homepage8"
    },

    {
        name: "HMC",
        percent_chng: "+0.49",
        color: "green",
        closing: 26.57,
        link: "/homepage9"
    },
    {
        name: "IHS",
        percent_chng: "+0.67",
        color: "green",
        closing: 8.92,
        link: "/homepage10"
    },
    {
        name: "NI",
        percent_chng: "-1.11",
        color: "red",
        closing: 28.34,
        link: "/homepage11"
    },
    {
        name: "JOUT",
        percent_chng: "+0.413",
        color: "green",
        closing: 60.73,
        link: "/homepage12"
    },
    {
        name: "KELYA",
        percent_chng: "1.32",
        color: "green",
        closing: 16.81,
        link: "/homepage13"
    },
    {
        name: "LGMK",
        percent_chng: "7.84",
        color: "green",
        closing: 0.158,
        link: "/homepage14"
    },

]

const Homepage = () => {
    const [csvdata, setCsvData] = useState([]);
    const csvData = async () => {
        const result = await fetch('http://ec2-13-231-143-65.ap-northeast-1.compute.amazonaws.com:8000/csvdata').then(async (res) => {
            console.log(res);
            let resp = await res.json();
            return resp;
        }).then((res) => {
            setCsvData(res);
            console.log(res)
            return res;
        })
    }

    useEffect(() => {
        csvData();
    }, [])
    return (
        <>
            <div className="nav-bar"> <div className="brand">Arcana</div> <div className="left panel">
                <div className="icons"><a href="/list">List</a></div>
                <div className="icons"><a href="">List</a></div>
                <div className="icons"><a href="">List</a></div>
            </div>
            </div>
            <div className='container'>
                <div className='left-bar'> {data.map((items) => {
                    return (
                        <a href={`${items.link}`}>
                            <div className="bar">
                                <div className="stock-name" style={{ color: items.color }}>{items.name}</div>
                                <FcLineChart />
                                <div className="price"><div className="stock-closing" style={{ color: items.color }}>{items.closing}</div>
                                    <div className="stock-opening" style={{ color: items.color }}>

                                        {items.percent_chng}%
                                    </div></div>

                            </div>
                        </a>
                    )
                })}</div>
                <div className='center-bar'>
                    <div className="title">LGMK</div>
                    <div className="line"><DemoLine /></div>
                    <div className="line" ><DemoDualAxes /></div>
                    {/* <div className="line" id="qwe"></div> */}
                </div>
                <div className='right-bar'>
                    <div className="scatter1">
                        <div>Trend</div>
                        <DemoGauge />
                    </div>
                    <div className="scatter">
                        <div>Sentiment</div>
                        <DemoRingProgress />
                    </div>
                    <div className="scatter">
                        <div>RSI</div>
                        <DemoLine1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage