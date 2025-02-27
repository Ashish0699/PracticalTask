/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button } from "antd";

interface TaskListSceneProps {
  userList?: any;
}

const TaskListScene = (props: TaskListSceneProps) => {
  const { userList } = props;
  return (
    <>
      <div className="flex justify-between">
        <h3>TaskListScene</h3>
        <span>
          <Button>Add New</Button>
        </span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {userList?.length > 0 ? (
            userList.map((val: any, index: number) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TaskListScene;
