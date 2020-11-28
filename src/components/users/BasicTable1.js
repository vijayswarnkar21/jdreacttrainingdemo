import React, {useState,useEffect} from 'react';
import MOCK_DATA from "./MOCK_DATA.json";
import ReactPaginate from 'react-paginate';

const BasicTable1 = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState(MOCK_DATA);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(MOCK_DATA.length / perPage)

    const getData = async() => {
        const data = MOCK_DATA;
                  const slice = data.slice(offset*perPage, offset*perPage + perPage)
                  setData(slice)
                  setPageCount(Math.ceil(data.length / perPage))
    }
    
    const handlePageClick = (e) => {
        debugger;
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <div>
            <table className = "table">
                <thead className = "thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.first_name}</td>
                            <td>{x.department}</td>
                            <td>{x.designation}</td>
                            <td>
                                <a href={`/employee/update/${x.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
    );
}

export default BasicTable1;
