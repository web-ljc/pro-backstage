import * as eCharts from "echarts";
import { useEffect, useRef } from "react";

// import ReactEcharts from 'echarts-for-react'

const Echarts = () => {
  const eChartsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const myChart = eCharts.init(eChartsRef.current as HTMLDivElement)
    let option = {
      title: {
        text: '产品销售占比',
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
          name: '销售来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '视频广告' },
            { value: 735, name: '搜索引擎' },
            { value: 580, name: '联盟推广' },
            { value: 484, name: '邮件营销' },
            { value: 300, name: '直接访问' }
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
    height: 300,
    marginTop: 20,
    marginLeft: 50
  }}>
    {/* <ReactEcharts option={getOption()} /> */}
    
  </div>)
}

export default Echarts
