import { trackabiAPI } from "../../../api";
import { projectBaseURI } from "../../index";

export const projectsByOrgAlias = async (orgName) => trackabiAPI.get('/project/list',
  {
    baseURL: projectBaseURI(orgName),
  });

export const create = async (orgName, data) => trackabiAPI.post('/project/create',
  data,
  {
    baseURL: projectBaseURI(orgName),
  });
