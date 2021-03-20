import React, { useState, useEffect } from 'react'

const Pagination = ({ total, page, size, handlePage }) => {
  const [buttonDisabled, setButtonDisabled] = useState({
    isNext: true,
    isPrev: true
  })

  const handlePagination = (e) => {
    let name = e.target.name
    if (name === "next") {
      handlePage(++page)
    } else if (name === "prev") {
      handlePage(--page)
    }
  }

  useEffect(() => {
    setButtonDisabled({
      isPrev: page > 0 ? false : true,
      isNext: (page + 1) * size < total ? false : true
    })
  }, [setButtonDisabled, page])

  return (
    <div>
      <button
        onClick={handlePagination}
        disabled={buttonDisabled.isPrev}
        name="prev" > Prev </button>

      <label htmlFor=""> {page}  </label>

      <button
        onClick={handlePagination}
        disabled={buttonDisabled.isNext}
        name="next" > Next </button>
    </div>
  )
}

export default Pagination