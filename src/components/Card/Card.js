import React, { useState } from 'react'

import {motion, AnimateSharedLayout } from 'framer-motion';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import'./Card.css'
import { VscChromeClose } from 'react-icons/vsc';

import Chart from 'react-apexcharts'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        {
            expanded?
                <ExpandedCard param={props} setExpanded={()=>{setExpanded(false)}} />:
            <CompactCard param = {props} setExpanded={()=>{setExpanded(true)}}/>
        }

    </AnimateSharedLayout>
  )
}

// compact card
function CompactCard({param, setExpanded}){
    const props={
        percent: param.barValue,
        size:80,
        colorSlice: "#ffffff",
        fontColor: "#ffffff",
        fontSize: "1.2rem",
        fontWeight: 600,
    }
    const Png = param.png;
    return(
        <motion.div className="compactCard"
        style = {{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressBar {...props} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>

            </div>
        </motion.div>
    )
}

// expanded card
function ExpandedCard({param, setExpanded}){
    const data ={
        options:{
            chart:{
                type: "area",
                height: "auto",
            },
            dropShadow:{
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill:{
                color: ['#fff'],
                type: "gradient",
            },
            dataLabels:{
                enabled: false,
            },
            stroke:{
                curve: "smooth",
                colors: ['white'],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid:{
                show: true,
            },
            xaxis:{
                type: "datetime",
                categories:[
                    "2022-05-26T00:00:00.000Z",
                    "2022-05-26T01:00:00.000Z",
                    "2022-05-26T02:00:00.000Z",
                    "2022-05-26T03:00:00.000Z",
                    "2022-05-26T04:00:00.000Z",
                    "2022-05-26T05:00:00.000Z",
                    "2022-05-26T06:00:00.000Z",
                ]
            }
        }
    }
    return(
        <motion.div 
        className="expandedCard" 
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
            }}
        layoutId='expandableCard'
        >
            <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
                <VscChromeClose onClick={setExpanded} />
            </div>
            <span>
                {param.title}
            </span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />   
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
}


export default Card