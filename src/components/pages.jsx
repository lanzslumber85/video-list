import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pages = (props) => {
  const bilanganLaman = Math.ceil(props.totalItems / props.itemsPerPage);

  if (bilanganLaman === 1) {
    return null;
  } else {
    const arrBilanganLaman = _.range(1, bilanganLaman + 1);
    return (
      <nav>
        <ul className="pagination">
          {arrBilanganLaman.map((n) => (
            <li
              key={n}
              className={
                n === props.activeCurrentPage ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => props.onClickPageNumber(n)}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

Pages.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  activeCurrentPage: PropTypes.number.isRequired,
  onClickPageNumber: PropTypes.func.isRequired,
};

export default Pages;
