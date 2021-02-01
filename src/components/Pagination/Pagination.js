import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { getAll } from "../../actions/item"
import { useHistory } from "react-router-dom"

const Pagination = ({ total, page, size, getAll }) => {
  const [paramsLink, setParamsLink] = useState({})
  const uri = `${window.location.pathname}`
  const history = useHistory()
  const [status, setStatus] = useState({
    prevStatus: true,
    nextStatus: true,
  })

  const calculation = (page, total, size) => {
    let callPage = parseInt(page) + 1;
    let setPrev = callPage <= 1 ? true : false;
    let setNext = (callPage * size < total) ? false : true;

    return {
      prevStatus: setPrev,
      nextStatus: setNext
    }
  }

  useEffect(() => {
    setStatus(calculation(page, total, size))
  }, [page])

  const handlePagination = (e) => {
    let name = e.target.name
    if (name === "next") {
      page++
    } else {
      page--
    }
    getAll({ page: page })
    setParamsLink({ page: page })
    
  }

  useEffect(() => {

    if (paramsLink.page > 0) {
      history.push(`${uri}?page=${paramsLink.page}`)
    } else {
      history.push(`${uri}`)
    }
  }, [paramsLink])

  return (
    <div>
      <button disabled={status.prevStatus} onClick={handlePagination} name="prev" > Prev </button>
      <label htmlFor=""> {page + 1} </label>
      <button disabled={status.nextStatus} onClick={handlePagination} name="next" > Next </button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    items: state.getItems.data || []
  }
}

const mapDispatchToProps = { getAll };

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)