import React from "react";
import type { RootState } from "@redux/store";
import { Page, Switch } from "@modules/common/components";
import { LaunchCardGrid } from "@modules/launches/components";
import { usePostLaunchesQueryMutation } from "@redux/services/launches/launchesAPI";
import { IPostBody } from "@modules/common/interfaces";
import { WithLoader } from "@modules/common/components/templates/WithLoader";
import { useDispatch, useSelector } from "react-redux";
import { changeLaunchesSortType } from "@redux/modules/launches/launchesSlice";

export const HomePage: React.FC = () => {
  const [postLaunchesQuery, response] = usePostLaunchesQueryMutation();
  const dispatch = useDispatch();
  const launches = useSelector((state: RootState) => state.launches);

  React.useEffect(() => {
    postLaunchesQuery({
      query: launches.networkQuery,
      options: launches.networkOptions,
    });
  }, [launches.networkOptions]);

  return (
    <Page>
      <Switch
        options={[
          { title: "Latest first", value: "asc", default: false },
          { title: "Newest first", value: "desc", default: true },
        ]}
        onOptionChange={(value: "asc" | "desc") =>
          dispatch(changeLaunchesSortType(value))
        }
      />
      <WithLoader isLoading={response.isLoading}>
        {response.data && <LaunchCardGrid cards={response.data} />}
      </WithLoader>
    </Page>
  );
};
