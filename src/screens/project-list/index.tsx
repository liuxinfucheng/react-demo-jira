import React from "react";
import { List, Project } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);

  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List list={list || []} users={users || []} />
    </div>
  );
};
