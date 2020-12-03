import React, { Fragment, PureComponent } from "react";
import RowWrapper from "./RowWrapper";
import { connect } from 'react-redux';
import { fetchUserList } from '../../redux';

class UserListV2 extends PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: []
    };

    componentDidMount() {
        this.props.fetchUserList();
    }

    // _loadNextPage = (...args) => {
    //     console.log("args--------------------------------->",args);
    //     console.log("this.props.userListData.length----------------------------->",this.props.userListData.length);
    //     console.log("value of in _loadNextPage hasNextPage--------------------",this.state.items.length < this.props.userListData.length);
    //     this.setState({ isNextPageLoading: true }, () => {
    //         this.setState(state => ({
    //             hasNextPage: state.items.length < this.props.userListData.length,
    //             isNextPageLoading: false,
    //             items: this.props.userListData.slice(0, args[0])
    //         }));
    //     });
    // };

    // _loadNextPage = (...args) => {
    //     console.log("loadNextPage------------------------------->", args);
    //     this.setState({ isNextPageLoading: true }, () => {
    //       setTimeout(() => {
    //         this.setState((state) => ({
    //           hasNextPage: state.items.length < 100,
    //           isNextPageLoading: false,
    //           items: [...state.items].concat(
    //             new Array(10).fill(true).map(() => ({ name: "vijay" }))
    //           )
    //         }));
    //       },0);
    //     });
    //   };

    _loadNextPage = (...args) => {
        console.log("args------------------------------->", args);
        console.log("state.items.length--------------->", this.state.items.length);
        console.log("this.props.userListData.length------------>", this.props.userListData.length);
        this.setState({
            hasNextPage: this.state.items.length < this.props.userListData.length,
            isNextPageLoading: false,
            items: this.props.userListData.slice(0, args[0] + 10)
        });
    };

    render() {
        const { hasNextPage, isNextPageLoading, items } = this.state;
        console.log("this.props.userListData.length----------------------------->", this.props.userListData.length);
        console.log("isNextPageLoading----------------------------->", isNextPageLoading);
        console.log("items----------------------------->", items);
        return (
            <Fragment>
                <RowWrapper
                    hasNextPage={hasNextPage}
                    isNextPageLoading={isNextPageLoading}
                    items={items}
                    loadNextPage={this._loadNextPage}
                />
            </Fragment>
        );
    }
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
    (UserListV2)
