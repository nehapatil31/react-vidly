import React, { Component } from "react";
import PropTypes from "prop-types";

class TableHeader extends Component {
    raiseSort = path => {
        const sortOrder = { ...this.props.sortOrder };
        if (sortOrder.path === path) {
            sortOrder.order = sortOrder.order === "asc" ? "desc" : "asc";
        } else {
            sortOrder.path = path;
            sortOrder.order = "asc";
        }
        this.props.onSort(sortOrder);
    };

    renderSortIcon = column => {
        const { sortOrder } = this.props;
        if (column.path !== sortOrder.path) return null;
        if (sortOrder.order === "asc")
            return <i className="fa fa-sort-asc"></i>;
        if (sortOrder.order === "desc")
            return <i className="fa fa-sort-desc"></i>;
    };

    render() {
        return (
            <thead>
                <tr>
                    {this.props.headerColumns.map(column => (
                        <th
                            className="clickable"
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                            scope="col"
                        >
                            {column.label}
                            {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    headerColumns: PropTypes.array.isRequired,
    sortOrder: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default TableHeader;
