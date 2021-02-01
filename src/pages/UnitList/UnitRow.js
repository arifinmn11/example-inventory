import React from 'react'
import { Link } from 'react-router-dom'

const UnitRow = ({ data, onDeleted, number }) => {
  return (
    <tr>
      <td> {number} </td>
      <td> {data.id} </td>
      <td> {data.code} </td>
      <td> {data.description} </td>
      <td>
        <button> <Link to={`/unit/${data.id}/edit`} >edit</Link></button>
        {' '}
        <button onClick={onDeleted}> Delete </button>
      </td>
    </tr>
  )
}

export default UnitRow
