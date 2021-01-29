import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import UnitRow from "./UnitRow"
import { findAll, removeById } from '../../actions/unit'
import { connect } from "react-redux"

function UnitList({ isLoading, isRemoved, units, findAll, removeById }) {

    useEffect(() => {
        findAll()
    }, [])

    useEffect(() => {
        if (isRemoved) {
            findAll()
        }
    }, [isRemoved])

    const onDelete = (id) => {
        removeById(id)
    }

    return (
        <div>

            <table>
                <thead>
                    <tr>
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
                                    <UnitRow onDeleted={() => onDelete(e.id)} key={i} data={e} />
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
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeUnitById,
        units: state.findAllUnit.data || [],
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
    }
}

const mapDispatchToProps = { findAll, removeById };

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
