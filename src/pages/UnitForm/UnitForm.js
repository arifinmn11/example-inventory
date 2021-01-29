import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { findById, save } from "../../actions/unit"
import { connect } from "react-redux"
import { saveUnit } from '../../reducers/unit'

const UnitForm = ({ isLoading, findById, unit, savedUnit, save }) => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const history = useHistory();

    useEffect(() => {
        console.log("use effect ")
        if (id && parseInt(id) !== data.id) {
            console.log("use effect ")
            findById(id);
            setData(unit)
        }
    }, [unit])

    useEffect(() => {

        console.log(savedUnit)
        if(savedUnit) {

        console.log("use effects saveunit ")
            history.push('/units')
        }
    }, [savedUnit])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
        // history.push('/units')
    }

    return (
        <div style={{ marign: "auto" }}>
            { !isLoading ?
                <form onSubmit={handleSubmit}>
                    <div>
                        <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                        <label htmlFor="code">Code</label>
                        <input onChange={handleChange} type="text" value={data?.code || ''} name="code" />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input onChange={handleChange} type="text" value={data?.description || ''} name="description" />
                    </div>
                    <button> {id > 0 ? "Update" : "Submit"} </button>
                </form> :
                <div>Loading ...</div>
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    // console.log
    return {
        // call reducer
        unit: state.findUnitById.data,
        isLoading: state.findUnitById.isLoading,
        update: state.updateUnit,
        savedUnit: state.saveUnit.data
    }
}

const mapDispatchToProps = { findById, save }


export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
