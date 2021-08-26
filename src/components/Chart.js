import React, {useEffect, useState} from 'react';
import  {PieChart}  from 'react-minimal-pie-chart';


const Chart = (props) => {
const [over, setOver] = useState([])
const [under, setUnder] = useState([])

console.log(props.cars)

// useEffect(()=> {
  // console.log("mounted")
  //   if(!props.cars) return;
  
  // const over = props.cars.filter(car => car.horsepower >= 200)
  // const under = props.cars.filter(car => car.horsepower < 200)
  // console.log(over)
  // setOver(over)
  // setUnder(under)
  // // console.log(props.cars)
  // }, [props.cars])
  
  // useEffect(()=> {
  //   if(!over.length) return;
  //   if(!under.length) return;
  //   console.log("over", over.length)
  //   console.log("under", under.length)
  // }, [over, under])
  
  return (
    <div>
     {props.cars.length ? <PieChart
          style={{ width: "200px" }}
          data={[
            { title: "Over", value: over.length, color: "#C13C37" },
            { title: "Under", value: under.length, color: "#E38627" }
          ]}
          label
          labelStyle={{
            fill: "white",
            fontSize: "small"
          }}
        /> : null }
        <Legend />
      </div>
    )
  }

  
  function Legend() {
    return (
      <h6>
        Horsepower: &nbsp;
        <span style={{ background: "#C13C37" }}>&nbsp; &nbsp; &nbsp;</span>
        &nbsp;
        <span>Over 200</span>
        &nbsp;
        <span style={{ background: "#E38627" }}>&nbsp; &nbsp; &nbsp;</span>
        &nbsp;
        <span>Under 200</span>
      </h6>
    )
  }

  export default Chart
