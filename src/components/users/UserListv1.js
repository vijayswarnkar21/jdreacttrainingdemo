import React, { useEffect } from 'react';
import { fetchUserList } from '../../redux';
import { connect } from 'react-redux';
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

const Row = props => {
    const x = props.data[props.index];
    const style = {
        height: 50,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };

    // const editClick = (id) => {
    //     props.history.push(`/user/${id}`);        
    // }

    return (
        <div style={style} className="row" key={x.id}>
            <div className="col-md-3">{x.id}</div>
            <div className="col-md-3">{x.name}</div>
            <div className="col-md-3">{x.department}</div>
            <div className="col-md-3">
                <button>Edit</button>
            </div>
        </div>
    )
};

const UserListv1 = (props) => {
    //const [isItemLoaded, setIsItemLoaded] = useState(initialState);

    useEffect(() => {
        props.fetchUserList();
    }, [])

    return (
        <InfiniteLoader>
            {({ onItemsRendered, ref }) => (
                <AutoSizer>
                    {({ height, width }) => (
                        <FixedSizeList
                            className="List"
                            height={1000}
                            itemCount={props.userListData.length}
                            itemSize={40}
                            width={width}
                            itemData={props.userListData}
                            navigation={props.history}
                        >
                            {Row}
                        </FixedSizeList>
                    )}
                </AutoSizer>
            )}
        </InfiniteLoader>
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
    (UserListv1)
