import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const ExampleWrapper = ({
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage
}) => {
    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index) => !hasNextPage || index < items.length;

    const Item = ({ index, style }) => {
        let content;
        if (!isItemLoaded(index)) {
          content = "Loading...";
        } else {
          content = items[index].name;
        }
    
        return <div style={style}>{content}</div>;
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
              itemSize={100}
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

export default ExampleWrapper;
