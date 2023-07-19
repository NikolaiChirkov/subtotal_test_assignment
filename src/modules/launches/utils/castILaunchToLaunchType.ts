import { ILaunch } from "../interfaces";
import { LaunchType } from "../types";

type castILaunchToLaunchType = (launches: ILaunch[]) => LaunchType[];

export const castILaunchToLaunchType: castILaunchToLaunchType = (launches) => {
  return launches.map((launch) => ({
    name: launch.name,
    utcDate: launch.date_utc,
    info: launch.details,
    imgSrc: launch.links.flickr.original[0],
  }));
};
