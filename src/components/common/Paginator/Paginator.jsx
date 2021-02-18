import React from "react";
import style from './Paginator.module.css'

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pagesList = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }

  return (
      <div>
        {pagesList.map((page) => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page
                  ? style.selectedPage
                  : style.defaultPage
              }
              onClick={(e) =>{ 
                props.onPageChanged(page)}
              }
            >
              {page}
            </span>
          );
        })}
      </div>
  );
};

export default Paginator;
