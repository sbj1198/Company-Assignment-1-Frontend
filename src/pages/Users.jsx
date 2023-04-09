import * as React from "react";
import axios from "axios";
import { api } from "../../API/api";
import { ListView } from "../components/ListView";

export const Users = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(`${api}/users`);
    setUsers(data);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return <ListView users={users} />;
};
