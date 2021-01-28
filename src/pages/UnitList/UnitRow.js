import React from 'react'
import { Link } from 'react-router-dom'

const UnitRow = ({ data, onDeleted }) => {
  return (
    <tr>
      <td> {data.id} </td>
      <td> {data.code} </td>
      <td> {data.description} </td>
      <td>
        <Link to={`/unit/${data.id}/edit`} >edit</Link>
        {' '}
        <button onClick={onDeleted}> Delete </button>
      </td>
    </tr>
  )
}

export default UnitRow
