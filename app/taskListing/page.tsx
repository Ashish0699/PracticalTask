"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../_component/header";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import TaskListScene from "./taskListScene";

const TaskListing = () => {
  const [cookies, , removeCookie] = useCookies(["x-session-token"]);
  // const [userList, setUserList] = useState<any>([]);

  const doLogout = () => {
    console.log("cookies: ", cookies);
    removeCookie("x-session-token", { path: "/" });

    toast.success("Logout successfully!");
    setTimeout(() => {
      window.location.href = `/login`;
    }, 500);
  };
  // const userData = async () => {
  //   try {
  //     const res = await getUserList();
  //     console.log("User List:", res.data);
  //     // return res.data;
  //     setUserList(res.data);
  //   } catch (error) {
  //     console.error("Error fetching user list:", error);
  //   }
  // };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header doLogout={doLogout} taskList={true} />
        <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <TaskListScene/>
        </div>
      </div>
    </>
  );
};

export default TaskListing;
