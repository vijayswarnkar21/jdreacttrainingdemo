import React, { useState, useEffect, useRef } from 'react';
//import ReactPaginate from 'react-paginate';
import { fetchUserListV3, userLitsV3Loadmore, userLitsv3Scroll } from '../../redux';
import { connect } from 'react-redux';
import './userlist.css';


const UserListV3 = (props) => {
    const [data, setData] = useState([]);
    const tbodyRef = useRef()
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(data.length / perPage)

    const getData = () => {
        if(pageCount == props.currentPage){
            alert("No more data to load");
        }else{
            const slice = props.userListData.slice(0, ((props.currentPage-1) * perPage) + perPage)
            setData(slice)
            setPageCount(Math.ceil(props.userListData.length / perPage))
        }
    }
    useEffect(() => {
        document.getElementById("userListDiv").scrollTop = props.scrollYCordinate;
    })

    useEffect(() => {
        if(!props.userListData || !props.userListData.length){
            props.fetchUserListV3();
        }

    },[])

    useEffect(() => {
        getData()

    },[props.currentPage,props.userListData])

    const editClick = (id) => {
        props.history.push(`/user/${id}`);        
    }
    return (
        <div>
            <table className="table fixed_header">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>DESIGNATION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody ref = {tbodyRef} id = "userListDiv" onScroll = {() => {
                    const scroller = document.getElementById("userListDiv");
                    if( scroller.scrollTop === (scroller.scrollHeight - scroller.offsetHeight)){
                        props.userLitsV3Loadmore(props.currentPage+1);
                    }
                    console.log("scroller.scrollTop------------------------->",scroller.scrollTop);
                    props.userLitsv3Scroll(scroller.scrollTop)
                }}>
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
            {/* <button onClick = {() => props.userLitsV3Loadmore(props.currentPage+1)}>Load More</button> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userListData: state.userListv3.userList,
        currentPage: state.userListv3.currentPage,
        scrollYCordinate: state.userListv3.scrollYCordinate
    }
}

const mapDispathchToProps = (dispatch) => {
    return {
        fetchUserListV3: () => dispatch(fetchUserListV3()),
        userLitsV3Loadmore: (currentPage) => dispatch(userLitsV3Loadmore(currentPage)),
        userLitsv3Scroll: (scrollerycordinate) => dispatch(userLitsv3Scroll(scrollerycordinate))
    }
}

export default connect
    (mapStateToProps,
        mapDispathchToProps)
    (UserListV3)
