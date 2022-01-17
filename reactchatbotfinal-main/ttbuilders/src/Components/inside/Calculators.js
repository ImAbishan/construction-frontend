// import '../../App.css';
// import React, {Component } from 'react'; 
// import './Calculator.css';
// // import SimpleForm from '../../componentsChat/SimpleForm';
// // import axios from 'axios';
// import Chart from "react-google-charts";


// class Calculators extends Component {
//   // componentDidMount() {



//    componentWillMount() {
//     const { steps } = this.props;
//     const {  salaryanswer, rate } = steps;

//     this.setState({ salaryanswer,rate });
//   }
//   render(){
//     const { salaryanswer, rate } = this.state;

//   //   const { steps } = this.props;
//   //   const {  salaryanswer, rate } = steps;

//   //   this.setState({salaryanswer,rate });
//   // }

//   // render(){
//   //   const { rate, salaryanswer } = this.state || {};

    
  
//   // constructor(props) {
  
//   //   super(props);  
   
//   //   // this.handleTrigger = this.handleTrigger.bind(this);
   
//   //   // const { steps } = this.props;
//   //   // const { salaryanswer, rate } = steps;
//   //   // this.state = {salaryanswer = 
//   //   //   this.props.salaryanswer,
//   //   //  rate=
//   //   //    this.props.rate};
    
   

//   //   // this.state = {
//   //   //   salaryanswer:this.props.salaryanswer|| [],
//   //   //   rate:this.props.rate || [],
     
//   //   // }

 
//   // };
  
  
//   // componentDidMount() {
      
//   //   const { steps } = this.props;
//   //   const { salaryanswer, rate } = steps;


//   //   this.setState({ salaryanswer, rate });
//   //   // const { steps } = this.props;
//   //   // const { salaryanswer, rate } = steps;
    
//   //   // this.props = {salaryanswer, rate};

//   //   // const userObject = {
//   //   //   salaryanswer: this.state.salaryanswer.value,
//   //   //   rate:this.state.rate.value,
//   //   // }

//   //   // axios.post(`/api`, userObject)
//   //   // .then(res => {
//   //   //   console.log(res.status)
//   //   // }).catch(function(error) {
//   //   //   console.log(error);
//   //   // });
//   // }

// //   render() {
// //   // const {salaryanswer, rate } = this.state;
// // // const salaryanswer=  2000;
// // // const rate = 3000;
// //     const {salaryanswer, rate } = this.state;

//    const chartEvents = [
//     {
//       eventName: "select",
//       callback({ chartWrapper }) {
//         console.log("Selected ", chartWrapper.getChart().getSelection());
//       }
//     }
//   ];


//     return (


//       <Chart
//       width={'600px'}
      
//       height={'600px'}
//       chartEvents={chartEvents}
    
//       chartType="LineChart"
//       loader={<div>Loading Chart</div>}
//       data={[
//         ['Year', 'Salary'],

//         ['Year 1',Math.floor(rate.value) * (salaryanswer.value)],
//         ['Year 2',Math.floor(rate.value) * (salaryanswer.value)],
//         ['Year 3',Math.floor(rate.value) * (salaryanswer.value)],
//         ['Year 4',Math.floor(rate.value) * (salaryanswer.value)],
//       ]}
//       options={{
//         title: 'Your Live Chart',
        
//         hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
//         animation: {
//           startup: true,
//           easing: 'linear',
//           duration: 1500,
//         },
//         colors: ['#FB7A21'],

       
        
//         enableInteractivity: false,
//         vAxis: {
//           minValue: 1000,
//           curveType: "function",
//           legend: { position: "bottom" },
//           type: 'number',
//           curveType: 'function', 
//           smoothline: 'true',
          

//           gridlines: { count: 4 }
//         },
//         legend: 'none'

//         // For the legend to fit, we make the chart area smaller

//         // lineWidth: 25
//       }}
//     // For tests
//     // rootProps={{ 'data-testid': '1' }}
//     />
     

//     )


//   }

// }

// export default Calculators;












// // import React, {Component } from 'react'; 
// // var Component = React.Component;
// import React, { Component } from 'react';
// import CanvasJSReact from '../../assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
// import SimpleForm from '../../componentsChat/SimpleForm';
import axios from 'axios';
import './Calculator.css';
import '../../App.css';
// import Chart from 'react-google-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Calculators extends Component {

  //   constructor(props) {
  
  //   super(props);  

  //    const { steps } = this.props;
  //   const { salaryanswer, rate } = steps;
  //   this.state = {salaryanswer, rate};

  //   // this.state = {
  //   //   salaryanswer:[],
  //   //   rate:[],
     
  //   // }
    
  //   // this.state = {
  //   //   salaryanswer:this.props.salaryanswer|| "",
  //   //   rate:this.props.rate || "",
     
  //   // }

  

  // componentWillMount() {
  //   const { steps } = this.props;
  //   const {  salaryanswer, rate } = steps;

  //   this.setState({ salaryanswer,rate });
  // }
 





	render() {
    // const {salaryanswer, rate } = this.state;
   const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection());
      }
    }
  ];

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Amana's Life planner"
			},
			axisY: {
				title: "Salary",
				suffix: ""
			},
			axisX: {
				title: " Year",
				prefix: "",
        stripLines:[
                    {
                        
                        startValue:3.0,
                        endValue:3.05,                
                        color:"red",
                        label : "House",
                        labelFontColor: "#a8a8a8"
                    }
                    ],
			
			},
			data: [{
				type: "line",
				toolTipContent: "year : y",
				dataPoints: [
					{ label:"Year 1", y: 2000 },
					{ label:"Year 2", y: 3000 },
					{ label:"Year 3", y: 4000 },
					{ label:"Year 4", y: 5000 },
					{ label:"Year 5", y: 6000 },
			
		
		
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Calculators;                           



