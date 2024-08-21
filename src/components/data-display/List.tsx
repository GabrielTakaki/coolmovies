import React from "react";
import { Divider, List as MuiList, ListItem } from "@mui/material";

type Props<R> = {
  data: R[];
  renderItem: (item: R) => React.ReactNode;
  renderActions?: (item: R) => React.ReactNode;
  keyExtractor: (item: R) => string;
  showDivider?: boolean;
};

function List<R>({
  data,
  renderItem,
  renderActions,
  keyExtractor,
  showDivider = false,
}: Props<R>) {
  return (
    <MuiList>
      {data.map((item, index) => (
        <>
          <ListItem
            key={keyExtractor(item)}
            secondaryAction={renderActions && renderActions(item)}
          >
            {renderItem(item)}
          </ListItem>
          {showDivider && index !== data.length - 1 && (
            <Divider sx={{ marginY: "20px" }} variant="inset" component="li" />
          )}
        </>
      ))}
    </MuiList>
  );
}

export default List;
