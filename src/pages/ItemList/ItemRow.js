import React from 'react'

const ItemRow = ({ number, data, total, size, page }) => {

  const getNumber = () => {

    let calculate = (size) * (page) + number + 1  
    return calculate.toFixed(0)
  }

  return (
    <tr>
      <td> {getNumber()} </td>
      <td> {data.id} </td>
      <td> {data.name} </td>
      <td> {data.price} </td>
      <td>
        <button> edit </button>
        <button> delete </button>
      </td>
    </tr>
  )
}

export default ItemRow
