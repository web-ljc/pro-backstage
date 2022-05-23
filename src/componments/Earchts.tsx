import * as eCharts from "echarts";
import { useEffect, useRef } from "react";

// import ReactEcharts from 'echarts-for-react'

const Echarts = () => {
  const eChartsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const myChart = eCharts.init(eChartsRef.current as HTMLDivElement)
    let option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }, [])



  return (<div ref={eChartsRef} style={{
    width: 600,
    height: 200,
  }}>
    {/* <ReactEcharts option={getOption()} /> */}
    
  </div>)
}

export default Echarts
