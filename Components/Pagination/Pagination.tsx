import React from "react";
import {productItem} from "@/interfaces/common";

const Pagination = ({setPagination, data, pagination}: {
    data: productItem[],
    setPagination?: (arg?: number) => void,
    pagination: number
}) => {
    const generatePagination = (result: any) => {
        const paginationList = []
        const length = Math.ceil(result.length / 10)
        for (let i = 1; i <= length; i++) {
            paginationList.push(<li key={i}>
                <span onClick={() => {
                    setPagination!(i)
                    window.scrollTo(0, 0);
                }} style={{cursor: 'pointer'}}
                      className={"page-numbers " + (i === pagination && 'current')}>
                    {i}
                </span>
            </li>)
        }

        return paginationList
    }

    return <>
        {Math.ceil(data.length / 10) !== 1 ?  <nav className="pagination">
            <ul className="page-numbers">
                <li onClick={() => {
                    if (pagination - 1 >= 1) {
                        setPagination!(pagination - 1)
                        window.scrollTo(0, 0);
                    }
                }}><a className="prev page-numbers">Previous</a></li>
                {generatePagination(data)}
                <li onClick={() => {
                    if (pagination + 1 <= Math.ceil(data.length / 10)) {
                        setPagination!(pagination + 1)
                        window.scrollTo(0, 0);
                    }
                }}><a className="next page-numbers">Next</a></li>
            </ul>
        </nav> : '' }

    </>
};

export default Pagination;