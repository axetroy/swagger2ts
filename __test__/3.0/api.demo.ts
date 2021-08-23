import { unknownApi } from "./api.ts";

unknownApi.domain = "http://192.168.0.21";
unknownApi.prefix = "/upms";

unknownApi.interceptors.request.use(async (config) => {
  return config;
});

unknownApi.interceptors.response.use(
  async (config, resp) => {
    return resp;
  },
  async (config, err) => {
    return Promise.reject(err);
  }
);

// http://192.168.0.21/upms/role
// http://192.168.0.21/upms/menu
// http://192.168.0.21/api/menu
unknownApi.get("/role", {}).then((res) => {
  console.log(res);
});

unknownApi.get("/role/{id}/menu", { path: { id: 123 } }).then((res) => {});
