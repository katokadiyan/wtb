import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ tableData, title, breakOn = 'medium' }) => {
  let tableClass = 'table-container__table';

  if(breakOn === 'small') {
    tableClass += ' table-container__table--break-sm';
  }else if(breakOn === 'medium') {
    tableClass += ' table-container__table--break-md';
  }else if(breakOn === 'large') {
    tableClass += ' table-container__table--break-lg';
  }

  const data = tableData.map((row, index) => {
    let rowData = [];
    let i = 0;

    for(const key in row) {
      rowData.push({
        val: row[key]
      });
      i++;
    }

    return <tr key={index}>
      {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
    </tr>
  });

  return(
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  breakOn: PropTypes.oneOf(['small', 'medium', 'large']) 
}

export default Table;