import React, { useState } from 'react';
import Pagination from "react-js-pagination";

const PaginationComponent = () => {
    const [activePage, setactivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    return (
        <div>
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </div>
    );
}

export default PaginationComponent;
