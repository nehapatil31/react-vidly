import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ headerColumns, onSort, sortOrder, data }) => {
    return (
        <table className="table">
            <TableHeader
                headerColumns={headerColumns}
                onSort={onSort}
                sortOrder={sortOrder}
            />
            <TableBody data={data} columns={headerColumns} />
        </table>
    );
};

export default Table;
