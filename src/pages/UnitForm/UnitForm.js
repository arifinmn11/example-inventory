import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findById, update } from "../../actions/unit"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
const UnitForm = ({ isUpdated, update, findById, unit }) => {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        if (id && parseInt(id) !== data.id) {
            findById(id);
            setData(unit)
        }
    }, [findById, data])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        update(data)
        setRedirect(true)
    }

    if (redirect === true) {
        return <Redirect to="/units" />
    }

    return (
        <div style={{ marign: "auto" }}>

            {
                console.log(data)
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="text" value={data?.id} name="id" hidden={true} />

                    <label htmlFor="code">Code</label>
                    <input onChange={handleChange} type="text" value={data?.code} name="code" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={handleChange} type="text" value={data?.description} name="description" />
                </div>
                <button type="butotn"> {id > 0 ? "Update" : "Submit"} </button>
                {
                    // data ?
                    //     <button> <Link to="/units">Back</Link>  </button> : null
                }

            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        // call reducer
        unit: state.findUnitById,
        update: state.updateUnit

    }
}

const mapDispatchToProps = { findById, update }


export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
