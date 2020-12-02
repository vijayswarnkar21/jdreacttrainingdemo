import React, { Fragment, PureComponent } from "react";
import { name } from "faker";
import ExampleWrapper from "./ExampleWrapper";
import { fetchUserList } from '../../redux';
import { connect } from 'react-redux';

class InfiniteLoaded extends PureComponent {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: []
  };

  componentDidMount(){
    this.props.fetchUserList();
  }

  _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args);
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState(state => ({
          hasNextPage: state.items.length < 1000,
          isNextPageLoading: false,
          items: [...state.items].concat(
            new Array(10).fill(true).map(() => ({ name: name.findName() }))
          )
        }));
      }, 500);
    });
  };

  render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;

    return (
      <Fragment>
        <p className="Note">
          This demo app shows how to create a list that automatically loads the
          next "page" of data when a user scrolls close to the end of the list.
        </p>

        <ExampleWrapper
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
    (InfiniteLoaded)