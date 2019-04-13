import React from 'react'


const getValueColor = value =>{
    if (value < 0 ) return 'red'
    if (value > 0)return 'green'
    return 'black';
}
// function changeStyles(value)
// {
//   const check = <div> {value} </div>

//   if (value === 0)
//     {
//       const check = <div style = {{color: 'black'}}>{value}</div>
//       return check;
//     }
//   else if (value < 0)
//   {
//     const check = <div style = {{color:'red'}}>{value}</div>
//     return check;
//   }

//   else if (value > 0)
//   {
//     const check = <div style = {{color:'green'}}>{value}</div>
//     return check;
//   }
//   return check;

// }


class Counter extends React.Component
{
    // state là object chứa những giá trị thay đổi
    state = {
        value : 0,
        delta : 0 
    }
//tăng hệ quả performance khi để bên ngoài render
    handleChangecreaseClick = (deltaValue) =>{
        //const khai báo biến nhưng không thể thay đổi
        
        // var là khai báo biến nhưng chiếm vùng nhớ, var chấp nhận khai báo trùng tên
        let Value = this.state.value//let dùng để khai báo các biến và không chiếm bộ nhớ, không chấp nhận khai báo trùng tên
        Value += deltaValue
       this.setState({value: Value  })//setState để set lại giá trị cho state khi thay đổi giá trị)
    }

    handleChangeDeltaClick = (changdelta) =>{
      
        let Delta = this.state.delta
        Delta += changdelta
       this.setState({delta: Delta  })    }

    handleResetClick = () =>{
        // const currentValue = this.state.value

        this.setState({value:0})      
    }


    render()
    {
        const value = this.state.value
        
        
        return (<div> 
        <div> Current value :<span style = {{color: getValueColor(value)}}>{this.state.value}</span>  </div>
            <div><button onClick={()=>this.handleChangecreaseClick(this.state.delta)}>Update</button></div>

        <div> Delta: <span style = {{color:'black'}}>{this.state.delta}</span> </div>

        <div>
            <button onClick={()=>this.handleChangeDeltaClick(1)}> Increase</button>
            <button onClick={()=>this.handleChangeDeltaClick(-1)}>Decrease</button>
            <button onClick={()=>this.handleResetClick()}>Reset</button>
        </div>
        </div>
        )
    }
}

export default Counter