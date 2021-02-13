import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

function LineGraph (props) {
  const { seasonData, countData, name } = props.info

  const data1 = {
    label: `${name} penguins`,
    data: countData,
    backgroundColor: 'red',
    fill: false,
    borderColor: 'red',
    pointBackgroundColor: 'blue',
    pointBorderColor: 'blue',
    pointHitRadius: 100,
    pointStyle: 'rectRot'
  }

  const labelsData = seasonData

  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: labelsData,
          datasets: [data1]
        }}
        height={300}
        width={500}
        options={{
          responsive: false,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          animation: {
            duration: 1800,
            easing: 'easeInQuad'
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Number of penguins',
                fontColor: 'red',
                fontSize: 20

              },
              ticks: {
              //   suggestedMin: min,
              //   SuggestedMax: max,
                beginAtZero: true,
                fontColor: 'green'
              }
            }],
            xAxes: [{
              barThickness: 100,
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Year of Count',
                fontColor: 'red',
                fontSize: 20
              },
              ticks: {
                fontColor: 'rgb(140, 114, 114)',
                fontSize: 15,
                padding: 15
              }
            }]
          },
          legend: {
            labels: {
              fontSize: 20
            }
          }
        }}
      />

    </div>
  )
}

export default LineGraph
