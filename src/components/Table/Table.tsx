import React from "react"
// import './Table.scss'


const Table = () => {
  return <table className="table">
    <thead>
      <tr>
        <th>Products</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>Cookie</td>
      <td>$1.25</td>
      <td>23</td>
      </tr>
      <tr>
      <td>Milk</td>
      <td>$0.99</td>
      <td>52</td>
      </tr>
    </tbody>
  </table>
}

export default Table