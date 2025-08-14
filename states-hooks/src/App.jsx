 import  { Component } from 'react'
 import MyCounter from './components/MyCounter/MyCounter'
 import IncreaseDecreaseCount from './components/IncreaseDecreaseCount/IncreaseDecreaseCount'

 export default class  App extends Component {
   render() {
     return (
      <>
         <MyCounter />
         <IncreaseDecreaseCount />
      </>
   
     )
   }
 }
 