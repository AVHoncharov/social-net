import React, { useState } from "react";
import style from "./Paginator.module.css";

type PropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize?: number;
};

const Paginator: React.FC<PropsType> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pagesList: Array<number> = [];
  for (let i = 1; i < pagesCount; i++) {
    pagesList.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginatorLine}>
      {portionNumber > 1 && (
        <span>
          <button
            onClick={() => {
              setPortionNumber(1);
            }}
          >
            &lt;&lt;
          </button>

          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            &lt;
          </button>
        </span>
      )}

      {pagesList
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              key={page}
              className={
                currentPage === page ? style.selectedPage : style.defaultPage
              }
              onClick={(e) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <span>
          <button
            onClick={() => {
              setPortionNumber(portionCount);
            }}
          >
            &gt;&gt;
          </button>

          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            &gt;
          </button>
        </span>
      )}
    </div>
  );
};

export default Paginator;
