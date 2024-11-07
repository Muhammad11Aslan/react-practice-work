import React from 'react'

const EventFunctionConcept = () => {
  let data = "Aslan Ashraf";
  function apple() {
    data = "Aftab "
    alert("click the event function")
  }
  return (
    <div>
      <h1>{data}</h1>
      {/* agr ham function ko asy call kry gy to ya auto matic function ko call kry dy ga  */}
      {/* <button type='button' onClick={apple()}>click me</button> */}
      {/* =================== */}
      {/* ham function ko with out paranthise use kry gy then event call ho ga jb ham button ko click kry gy to function call hoga  */}
      <button type='button' onClick={apple}>click me</button>
      {/* =================== */}
      {/* asy ham alter ko use kry gy to ya alter auto call ho jy ga without click kiy click pa ya alter ni chaly ga  */}
      {/* <button type='button' onClick={alert("hello")}>click me</button> */}
      {/* =================== */}
      {/* agr ham arow function k sath declared kry gy to ya click event pa call hoga  */}
      {/* <button type='button' onClick={() => alert("hello")}>click me</button> */}


      {/* note  */}
      {/* agr ham parenthesis use kry to ham Arrow function use kry gy agr parenthesis use nahi krni to ham wasy name write kry gy   */}
      {/* for example */}
      {/* arrow function use  */}
      {/* <button type='button' onClick={()=>apple()}>click me</button> */}
      {/* without arrow function  */}
      {/* <button type='button' onClick={apple}>click me</button> */}
    </div>
  )
}

export default EventFunctionConcept;
