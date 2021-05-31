import React, { Component } from 'react';
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line, Bar} from 'react-chartjs-2';

import { ProgressBar, Dropdown } from 'react-bootstrap';




export class Dashboard extends Component {



  
  
  realTimeStatisticsData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Profit',
        data: [330, 380, 230, 400, 309, 530, 340],
        backgroundColor: "#0f5bff",
        borderColor: '#0f5bff',
        borderWidth: 200
        // width: 
      },
      {
        label: 'Target',
        data: [600, 600, 600, 600, 600, 600, 600],
        backgroundColor: '#e5e9f2',
        borderColor: '#e5e9f2',
        borderWidth: 0
      }
    ]
  };
  realTimeStatisticsOptions= {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0
      },
       width: 100
    },
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        stacked: true,
        ticks: {
          display: false,
          beginAtZero: true,
          fontColor: "#f3f3f3",
        },
        gridLines: {
          display: false,
          color: "#f3f3f3",
          zeroLineColor: '0,0,0,0'
        },
        barPercentage: 0.9,
        // barThickness: 5
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
    
  areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017","2018", "2019", "2020", "2021", "2022","2023", "2024", "2025", "2026", "2027","2028", "2029", "2030", "2031", "2032"],
    datasets: [{
      label: 'Value',
      lineTension: 0,
      data: [7, 14, 6, 4, 9, 8, 6,10, 14, 6, 4, 10, 5, 3, 7, 14, 6, 10, 5, 8, 6, 7, 14, 6, 4, 10, 5, 10],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        //  'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
      fill: true, // 3: no fill
    }]
};

areaOptions = {
    // plugins: {
    //   filler: {
    //     propagate: true
    //   }
    // },
    responsive: true,
    // maintainAspectRatio: true,
    layout: {
      padding: {
        left: "-10",
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true,
          fontColor: "#f3f3f3",
        },
        // display: false,
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        display: false,
        gridLines: {
          display: false,
          zeroLineColor: 'black'
        }
      }]
    },
    legend: {
      display: false,
  },
  elements: {
    point: {
      radius: 0
    }
  }
}
  
  

  
  render () {
    return (
      <div>
         <div className="test1">
         <div className="row"  style={{width: "100%"}}>
         <div className="col-xl-6 col-lg-12 grid-margin stretch-card" style={{flexDirection: "column"}}>
         <div className="card grid-margin" >
                  <div className="card-body">
                    
                      
                        <div className="d-flex align-items-center pb-2">
                          {/* <div className="dot-indicator bg-danger mr-2"></div> */}
                          <p className="mb-0" style={{cursor: "pointer", color: "#2196f3"}}>Total Sales</p>
                        </div>
                        <h3 className="font-weight-semibold">$124,563.00</h3>
                        <ProgressBar now={70} />
                      
                     
                    
                  </div>
                </div>
                <div className="card"  >
                  <div className="card-body">
                    <h1 className="card-title mb-4" style={{marginLeft: "32px", color: "#2196f3", cursor: "pointer", display: "inline"}}>New Users</h1>
                    <i className=" mdi mdi-dots-horizontal" style={{marginLeft: "77%", cursor: "pointer"}}></i>
                    <div className="">
                      <div className=" col-lg-12">
                          <h2 className="font-weight-semibold mb-0" style={{marginLeft: "18px", paddingBottom: "14px", marginTop: "13px"}}>94.2%</h2>
                          {/* <button type="button" className="btn btn-success btn-rounded">Success</button>            */}
                      </div>
                      <div className="col-xl-7 col-lg-12 d-flex pl-4">
                        <div className="ml-auto">
                          <Bar data={this.realTimeStatisticsData} options={this.realTimeStatisticsOptions} height={100} width={800}  id="bar-graph" />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
         </div>
         <div className="card grid-margin" style={{width: "48%"}}>
                  <div className="card-body pb-0">
                    <div className="d-flex justify-content-between">
                      <h1 className="card-title mb-0" style={{fontSize: "28px"}}>Balance</h1>
                      <div className="dropdown">
                        <Dropdown>
                          <Dropdown.Toggle variant="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuButton4">
                          Daily
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item  onClick={this.changeMarketingOneData} >Daily</Dropdown.Item>
                            <Dropdown.Item  onClick={this.changeMarketingTwoData}>Weekly</Dropdown.Item>
                            <Dropdown.Item onClick={this.changeMarketingThreeData}>Monthly</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <hr style={{color:"#e1e4e8", width: "111%", marginLeft: "-30px"}}></hr>
                    <div style={{height: "86px", width: "224px", border: "1px solid black", display: "inline-block", borderRadius: "13px", borderColor:"#e1e4e8"}}>
                      <p style={{marginLeft:"10px", marginTop:"10px", marginBottom: "4px"}}>Earnings</p>
                      <h1 style={{marginLeft:"10px", fontFamily:" Roboto , sans-serif", fontWeight: "500"}}>43.41%</h1>
                    </div>
                    <div style={{height: "86px", width: "224px", border: "1px solid black", display: "inline-block", marginLeft: "60px", borderRadius: "13px", borderColor:"#e1e4e8"}}>
                    <p style={{marginLeft:"10px", marginTop:"10px", marginBottom: "4px"}}>Sales Value</p>
                    <h1 style={{marginLeft:"10px", fontFamily:" Roboto , sans-serif", fontWeight: "500"}}>$95,422</h1>
                    </div>
                  </div>
                  <Line data={this.areaData} options={this.areaOptions} height={100} />
                </div>
        
                
                </div>
         </div>
        
        
        
        
        
        
        <div className="card" style={{width: "94%", marginLeft: "2%"}}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title mb-0" style={{marginLeft: "1%",textDecoration: "underline 4px blue", cursor: "pointer"}}>Incoming</h4>
                      <h4 className="card-title mb-0" style={{marginLeft: "-78%", cursor: "pointer"}}>Invoices</h4>
                      <Dropdown>
                  <Dropdown.Toggle variant="btn btn-secondary dropdown-toggle  toolbar-item" id="dropdownMenuButton2">
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Header>Export as PDF</Dropdown.Header>
                    <Dropdown.Item>Export as DOCX</Dropdown.Item>
                    <Dropdown.Item>Export as CDR</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>Invoice ID</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th >Status</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>MO63592DR2</td>
                            <td>08.04.2021</td>
                            <td>Code 5928MDO1</td>
                            <td style={{paddingLeft:"0px"}}><p  className="__complete"  >Complete</p></td>
                            <td>$755</td>
                          </tr>
                          <tr>
                            <td>MO63592DR2</td>
                            <td>08.04.2021</td>
                            <td>Code 5928MDO1</td>
                            <td style={{paddingLeft:"0px"}}><p  className="__complete"  >Complete</p></td>
                            <td>$800</td>
                          </tr>
                          <tr>
                            <td>MO63592DR2</td>
                            <td>08.04.2021</td>
                            <td>Code 5928MDO1</td>
                            <td  style={{paddingLeft:"0px"}}><p  className="__complete"  >Complete</p></td>
                            <td>$463</td>
                          </tr>
                          <tr>
                            <td>MO63592DR2</td>
                            <td>08.04.2021</td>
                            <td>Code 5928MDO1</td>
                            <td style={{paddingLeft:"0px"}}><p  className="__complete"  >Complete</p></td>
                            <td>$235</td>
                          </tr>
                          <tr>
                            <td>MO63592DR2</td>
                            <td>08.04.2021</td>
                            <td>Code 5928MDO1</td>
                            <td style={{paddingLeft:"0px"}}><p  className="__complete"  >Complete</p></td>
                            <td>$657</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
      </div> 
    );
  }
}
export default Dashboard;