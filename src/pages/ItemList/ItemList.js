import React, { useEffect, useState } from 'react'
import ItemRow from "./ItemRow"
import { connect } from "react-redux"
import { getAll } from "../../actions/item"
import Pagination from "../../components/Pagination"
import { useHistory } from "react-router-dom"

const ItemList = ({ getAll, items }) => {
  const history = useHistory()
  const searchParams = history.location.search
  const path = history.location.pathname

  useEffect(() => {
    let params = new URLSearchParams(searchParams.substring(1))
    let page = params.get("page");
    if (searchParams) {
      getAll({
        "page": page
      })
      history.push(`${path}${searchParams}`)
    } else {
      getAll()
    }
  }, [])



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.list && items.list.map((e, i) => {
              return (
                <ItemRow key={i} data={e} number={i} size={items.size} total={items.total} page={items.page} />
              )
            })
          }
        </tbody>
      </table>
      {/* {
        console.log(items.page)
      } */}
      <Pagination total={items.total} size={items.size} page={items.page} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.getItems.data || [],
    // error: state.findAllUnit.error,
    // isRemoved: state.removeUnitById,
    // units: state.findAllUnit.data || [],
    // isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
  }
}

const mapDispatchToProps = {
  getAll
  // findAll,
  // removeById
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)