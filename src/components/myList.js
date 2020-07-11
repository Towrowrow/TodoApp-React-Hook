import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemText from "@material-ui/core/ListItemText";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const TaskStyle = {
  banner: {
    backgroundColor: "#1976d2",
    opacity: "0.9",
  },
  bannerImportant: {
    backgroundColor: "#ff1744",
    opacity: "0.9",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
};

const MyList = (props) => {
  const { TasksList, taskManager, highlightTask } = props;

  return (
    <>
      <List>
        {TasksList.map((item, index) => {
          return item.done === false ? (
            <ListItem
              button
              divider={true}
              style={
                item.highlighted === false
                  ? TaskStyle.banner
                  : TaskStyle.bannerImportant
              }
            >
              <ListItemText
                fontSize="bolf"
                primary={item.title}
                style={TaskStyle.text}
              />
              <PriorityHighIcon
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                fontSize="large"
                color="secondary"
                onClick={() => highlightTask(index)}
              />
              <DeleteIcon
                style={{ backgroundColor: "white", borderRadius: "50%" }}
                fontSize="large"
                color="secondary"
                onClick={() => taskManager(index)}
              />
            </ListItem>
          ) : null;
        })}
      </List>
    </>
  );
};

export default MyList;
