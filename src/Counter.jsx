import React from 'react'

const getValueColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'black'
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

class Counter extends React.Component {
  // state là object chứa những giá trị thay đổi
  state = {
    value: 0,
    delta: this.props.initialDelta,
    autoIncreaseOn: this.props.initialAutoIncreaseOn,
  }
  interval = null
  //tăng hệ quả performance khi để bên ngoài render
  handleChangecreaseClick = deltaValue => {
    //truyen gia trị với tên là deltaValue
    //const khai báo biến nhưng không thể thay đổi

    // var là khai báo biến nhưng chiếm vùng nhớ, var chấp nhận khai báo trùng tên
    let Value = this.state.value //let dùng để khai báo các biến và không chiếm bộ nhớ, không chấp nhận khai báo trùng tên
    Value += deltaValue
    this.setState({ value: Value }) //setState để set lại giá trị cho state khi thay đổi giá trị)
  }

  handleChangeDeltaClick = changdelta => {
    let Delta = this.state.delta
    Delta += changdelta
    this.setState({ delta: Delta })
  }

  handleResetClick = () => {
    // const currentValue = this.state.value

    this.setState({ value: 0 })
    this.setState({ delta: 0 })
  }
  handleToggleAutoIncrease = () => {
    this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn }, () => {
      //call back function xử lý lại giá trị mới
      //console.log(this.state.autoIncreaseOn)
      if (this.state.autoIncreaseOn) {
        this.interval = setInterval(() => {
          this.handleChangecreaseClick(this.state.delta)
        }, 500)
      } else {
        clearInterval(this.interval)
      }
    })
  }
  componentDidMount = () => {
    if (this.state.autoIncreaseOn) {
      this.setState({ delta: this.props.initialDelta })
      this.interval = setInterval(() => {
        this.handleChangecreaseClick(this.state.delta) //dùng hàm changecrease với giá trị là state delta
      }, 500)
    }
  }

  render() {
    const { value, autoIncreaseOn } = this.state
    console.log('render')
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
          {' '}
          Current value :
          <span style={{ color: getValueColor(value) }}>
            {this.state.value}
          </span>{' '}
        </div>
        <div>
          <button
            onClick={() => this.handleChangecreaseClick(this.state.delta)}
          >
            Update
          </button>
        </div>

        <div>
          {' '}
          Delta: <span style={{ color: 'black' }}>{this.state.delta}</span>{' '}
        </div>

        <div>
          <button onClick={() => this.handleChangeDeltaClick(1)}>
            {' '}
            Increase
          </button>
          <button onClick={() => this.handleChangeDeltaClick(-1)}>
            Decrease
          </button>

          <button onClick={this.handleToggleAutoIncrease}>
            {autoIncreaseOn ? 'Stop ' : 'Start '}
            autoIncrease
          </button>
        </div>
      </div>
    )
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }
}

export default Counter
