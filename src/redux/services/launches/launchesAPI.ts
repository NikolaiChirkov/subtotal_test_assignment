import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostBody, IResponse } from "@modules/common/interfaces";
import { castILaunchToLaunchType } from "@modules/launches/utils";
import { ILaunch } from "@modules/launches/interfaces";
import { LaunchType } from "@modules/launches/types";

export const launchesApi = createApi({
  reducerPath: "launchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v5/launches/",
  }),
  endpoints: (builder) => ({
    postLaunchesQuery: builder.mutation<LaunchType[], IPostBody>({
      query: (payload) => ({ url: "query", method: "POST", body: payload }),
      transformResponse: (response: IResponse<ILaunch>) =>
        castILaunchToLaunchType(response.docs),
    }),
  }),
});

export const { usePostLaunchesQueryMutation } = launchesApi;
