import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchUserList } from '../../redux';
import { connect } from 'react-redux';

const UserList = (props) => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(data.length / perPage)
    const getData = () => {
        const slice = props.userListData.slice(offset * perPage, offset * perPage + perPage)
        setData(slice)
        setPageCount(Math.ceil(props.userListData.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };

    useEffect(() => {
        props.fetchUserList();
    },[])

    useEffect(() => {
        getData()
    },[offset,props.userListData])

    const editClick = (id) => {
        props.history.push(`/user/${id}`);        
    }
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>DESIGNATION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(x => (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.department}</td>
                                <td>{x.designation}</td>
                                <td>
                                    <button onClick = {() => editClick(x.id)}>Edit</button>
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
                activeClassName={"active"} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userListData: state.userList.userList
    }
}

const mapDispathchToProps = (dispatch) => {
    return {
        fetchUserList: () => dispatch(fetchUserList())
    }
}

export default connect
    (mapStateToProps,
        mapDispathchToProps)
    (UserList)
