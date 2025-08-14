 import  { Component } from 'react'
 import MyCounter from './components/MyCounter/MyCounter'
 import IncreaseDecreaseCount from './components/IncreaseDecreaseCount/IncreaseDecreaseCount'
 import UseEffectForTitle from './components/UseEffectForTitle/UseEffectForTitle'

 export default class  App extends Component {
   render() {
     return (
      <>
         <MyCounter />
         <IncreaseDecreaseCount />
         <UseEffectForTitle />
      </>
   
     )
   }
 }
 