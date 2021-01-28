import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findById } from '../../services/unit';
import { update } from "../../actions/unit"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
const UnitForm = ({ isUpdated, update }) => {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false)
    const [data, setData] = useState(findById(id))

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        update(data)
    }

    // useEffect(() => {
    //     isUpdated
    // }, [input])




    if (redirect === true) {
        return <Redirect to="/units" />
    }

    return (
        <div style={{ marign: "auto" }}>
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
                    data ?
                        <button> <Link to="/units">Back</Link>  </button> : null
                }

            </form>
        </div >
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        isUpdated: state.updateUnit
    }
}

const mapDispatchToProps = { update };

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
