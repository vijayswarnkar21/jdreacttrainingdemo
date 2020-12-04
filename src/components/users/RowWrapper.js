import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

export default function RowWrapper({
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage
}) {
    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => { } : loadNextPage;
    const isItemLoaded = (index) => !hasNextPage || index < items.length;
    const Item = ({ index, style }) => {
        const styleDiv = {
            height: 60,
            border: "1px solid green",
            margin: 6,
            padding: 8
        };
        let content;
        if (!isItemLoaded(index)) {
            content = "page is Loading...";
        } else {
            content = (
                <div style={styleDiv} className="row" key={items[index].id}>
                    <div className="col-md-3">{items[index].id}</div>
                    <div className="col-md-3">{items[index].name}</div>
                    <div className="col-md-3">{items[index].department}</div>
                    <div className="col-md-3">
                        <button>Edit</button>
                    </div>
                </div>
                // <div style={styleDiv} className="row">
                //     <div className="col-md-3">{items[index].name}{index}</div>
                //     <div className="col-md-3">
                //         <button>Edit</button>
                //     </div>
                // </div>
            );
        }

        return <div>{content}</div>;
    };

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    className="List"
                    height={550}
                    itemCount={itemCount}
                    itemSize={40}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    width={1100}
                >
                    {Item}
                </List>
            )}
        </InfiniteLoader>
    );
}
