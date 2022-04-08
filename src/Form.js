import React from 'react'
  class Form extends React.Component{
    constructor(){
      super();
      this.state={
        id:null,
        password:null
      }
    }
    click(){
      console.warn(this.state)

    }
  render(){
  return(
    <>
      <h1>form handling</h1>
      <input type='text' onChange={(e)=>this.setState({id:e.target.value})}/>
      <br/>
      <input type='password' onChange={(e)=>this.setState({password:e.target.value})}/>
      <br/>
      <button onClick={()=>this.click()}>submit</button>
    </>

  )
  }
} 
export default Form