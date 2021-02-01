import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { getAll } from "../../actions/item"
import { useHistory } from "react-router-dom"
// Pertama bikin dlu file Pagination
// Ini dibuat di folder component soalnya rencananya buat di akses 
// di banyak page

const Pagination = ({ total, page, size, getAll }) => {
  const [paramsLink, setParamsLink] = useState({})
  //ini buat ngambil searchparams
  // ex : http://localhost:3000/items?page=2&size=5
  // yang ?page=2 ini search params
  // kalo search params lebih dair satu pake tanda &
  const uri = `${window.location.pathname}`
  const history = useHistory()
  const [status, setStatus] = useState({
    // ini digunain buat disable buttonnya
    // kalo true berarti buttonnya ga bisa d click
    prevStatus: true,
    nextStatus: true,
  })

  const calculation = (page, total, size) => {
    // ini buat kalkulasi pagenya supaya numbernya sesuai,
    //  ketika callPage nya <= 1 ntar buttonnya jdi disabled
    // sedangkan yg setNext ketika hasil kalkulasi page * size lebih dari total
    // maka button disabled jdi false otomatis button bisa di click
    let callPage = parseInt(page) + 1;
    let setPrev = callPage <= 1 ? true : false;
    let setNext = (callPage * size < total) ? false : true;

    return {
      prevStatus: setPrev,
      nextStatus: setNext
    }
  }

  useEffect(() => {
    // disini untuk set ulang statusnya sama kalkulasinya buat searchParams di url
    // ex : ?page=2
    setStatus(calculation(page, total, size))
  }, [page])

  const handlePagination = (e) => {
    //  ini buat handle buttonnya jd kecikta button next d click
    // maka page d tambah kalo bkn btn next berarti d kurang
    let name = e.target.name
    if (name === "next") {
      page++
    } else {
      page--
    }
    // ini buat set data ulang tp pake params
    getAll({ page })
    // kalo ini buat setsearchParams linknya
    setParamsLink({ page })

  }

  useEffect(() => {

    if (paramsLink.page > 0) {
      // ini buat ngecek paramsLink nya 
      // jadi kalo nilai paramsLink lebih dari 0 maka
      // di push history nya
      history.push(`${uri}?page=${paramsLink.page}`)
    } else {
      // tp kalo salah di timpa jadi /items doang
      // soalnya default nya pasti d page=0
      history.push(`${uri}`)
    }
  }, [paramsLink])

  return (
    <div>
      <button
        disabled={status.prevStatus}
        onClick={handlePagination}
        name="prev" > Prev </button>

      <label htmlFor=""> {page} </label>

      <button
        disabled={status.nextStatus}
        onClick={handlePagination}
        name="next" > Next </button>
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