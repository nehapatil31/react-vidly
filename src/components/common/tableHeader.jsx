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
  render() {
    return (
      <thead>
        <tr>
          {this.props.headerColumns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.label}
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
