import React, { useState } from 'react';

function SideMenu() {
  // let [value, setValue] = useState(0);
  // const increment = () => {
  //   let newvalue = value + 1
  //   setValue(newvalue)
  // }
  // const decrement = () => {
  //   let newvalue = value - 1
  //   setValue(newvalue)
  // }
  return (
    <div>
      {/* <button className="btn btn-sm btn-primary" onClick={increment}>Plus</button>
      <button className="btn btn-sm btn-danger" onClick={decrement}>Minus</button>
      {value} */}
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
    </div>
  )
}

export default SideMenu
