import React, { useState, useEffect } from 'react';
import { fetchUserList } from '../../redux';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

const UserList = (props) => {
    const [start, setStart] = useState(0);
    const [data, setData] = useState([]);
    const [count] = useState(5);
    const getData = () => {
        const slice = props.userListData.slice(start, count)
        setData(slice)
    }

    const onScrollChange = () => {
        setStart(start + count)
    }

    useEffect(() => {
        props.fetchUserList();
    },[])

    useEffect(() => {
        getData()
    },[start,props.userListData])

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
                <InfiniteScroll
                dataLength={props.userListData.length} //This is important field to render the next data
                next={onScrollChange}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }>
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
                    </InfiniteScroll>
                </tbody>
            </table>
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
