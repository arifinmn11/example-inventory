import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import UnitRow from "./UnitRow"
import { findAll, removeById } from '../../actions/unit'
import { connect } from "react-redux"
import Container from "../../components/Container"

function UnitList({ isLoading, isRemoved, units, findAll, removeById, error }) {
  

    useEffect(() => {
        if (isRemoved) {
            findAll()
        }
    }, [isRemoved])

    const onDelete = (id) => {
        removeById(id)
    }

    const onReload = () => {
        findAll()
    }
    useEffect(() => {
        findAll()
    }, [])



    return (

        <Container error={error && error.message}>
            <div>
                <button onClick={onReload}> RELOAD </button>
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading ?
                                units.map((e, i) => {
                                    return (
                                        <UnitRow onDeleted={() => onDelete(e.id)} key={i} data={e} number={i + 1} />
                                    )
                                }) :
                                <tr>
                                    <td colSpan="3"> Loading..</td>
                                </tr>
                        }
                    </tbody>
                </table>
                <Link to="/unit">Add</Link>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllUnit.error,
        isRemoved: state.removeUnitById,
        units: state.findAllUnit.data || [],
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
    }
}

const mapDispatchToProps = { findAll, removeById };

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
