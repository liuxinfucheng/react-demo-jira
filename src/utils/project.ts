import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "utils/use-async";
import { Project } from "screens/project-list/list";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
