import React from "react";
import { CanvasJSChart } from 'canvasjs-react-charts'

const Chart = ({ title, xAxis, xAxisFormat, data }) => {
    const preConvertedData = [

        { x: new Date(2021, 1, 20), y: 30 },
        { x: new Date(2021, 1, 22), y: 1 }
    ]


    const options = {
        title: {
            text: title
        },
        backgroundColor: '#EBEBEB',
        height: 220,
        width: 330,
        dataPointWidth: 4,
        axisY: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function () {
                return "";
            }
        },
        axisX: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            title: xAxis,
            interval: 1,
            intervalType: 'day',
            valueFormatString: xAxisFormat
        },
        data: [{
            type: 'stackedColumn',
            dataPoints: preConvertedData,
            color: '#79AEE2'
        }]
    };

    return (
        <CanvasJSChart options={options} />
    )
}
export default Chart;