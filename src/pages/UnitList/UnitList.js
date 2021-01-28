import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import UnitRow from "./UnitRow"
import { findAll, removeById } from '../../actions/unit'
import { connect } from "react-redux"

function UnitList({ isRemoved, units, findAll, removeById }) {

    useEffect(() => {
     
        findAll()
    }, [isRemoved, units])

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
                        units && units.map((e, i) => {
                            return (
                                <UnitRow onDeleted={() => onDelete(e.id)} key={i} data={e} />
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/units">Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeUnitById,
        units: state.findAllUnit
    }
}

const mapDispatchToProps = { findAll, removeById };

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
