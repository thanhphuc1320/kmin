import React from 'react'
import Counter from './Counter'

function changeStyles(value)
{
  const check = <div> {value} </div>
  if (value === 0)
    {
      const check = <div style = {{color: 'black'}}></div>
      return check;
    }
  else if (value < 0)
  {
    const check = <div style = {{color:'red'}}></div>
    return check;
  }

  else if (value > 0)
  {
    const check = <div style = {{color:'green'}}></div>
    return check;
  }
  return check;

}
function App()
{
  
  return <Counter />
}

export default App;






// // const user = {
// //   firstName: 'Dương',
// //   lastName : 'Đỗ',
// //   email: 'duong@targeek.io',
// // }
// function getFullName(firstName, lastName)
// {
//     return firstName + ' ' +lastName
// }

// function getEmail(email)
// {
//   const check = <div>{email}</div>
//   if (!email)
//   {
//     email = "Mail is empty"
//     const check = <div style = {{color:'red'}} >{email}</div>
//     return check
//   }{/*check email nếu rỗng thì sẽ thành chữ đỏ*/}
//   return check
// }

// // const App = ()=>{
// //     const firstName = "Thanh"
// //     const lastName = "Phuc"
// //     const element = <div style = {{
// //       backgroundColor:'green',
// //       color : 'yellow',
// //       padding: 8 + 8,
// //       margin: '20px '

// //     }}>Hello {getFullName(firstName,lastName)}</div>

// //     //html: style="background-color: green; color: red; padding:8px"

// //     const welcome = <div >welcome message: {element}</div>

// //     return welcome
// //}


//   function User(props){
//     const userse = props.user
//      const element = (<div>
//       <div style ={{color: 'red' , fontSize: 22}}>
//           {getFullName(userse.firstName,userse.lastName)}
//       </div>
      
//     <div style={{fontStyle: userse.email ? 'inital' : 'italic', color:'green'}}>{/*check email nếu rỗng thì để in nghiêng */}
//         {
          
//           getEmail(userse.email )
//         }
//     </div>
//     </div>)
//     return element
//   }

//   const users = [
//     {
//       firstName: 'Dương',
//       lastName: 'Đỗ',
//       email: 'duong@gmail.com'
//     },
//     {
//       firstName: 'Trump',
//       lastName: 'Donald',
//       email: 'TrumpTA3'
//     },
//     {
//       firstName: 'phuc',
//       lastName: 'thanh',
//     }
//   ]

//   function App(){
//     const element = users.map(u => {
//       return <User
//       user={u}/>
//     })
//     return element
//   }
  

// //USE function ARRAY.MAP



// export default App;