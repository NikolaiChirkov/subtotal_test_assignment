import { DatePrecision } from "../types";

type UUID = string;

type FailureType = {
  time: number;
  altitude: number;
  reason: string;
};

type CrewType = {
  crew: UUID | null;
  role: string | null;
};

export interface ILaunch {
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: DatePrecision;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  tdb: boolean;
  net: boolean;
  window: number | null;
  rocket: UUID | null;
  success: boolean | null;
  failures: FailureType[];
  upcoming: boolean;
  details: string | null;
  fairings: {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: UUID[];
  };
  crew: CrewType[];
  ships: UUID[];
  capsules: UUID[];
  payloads: UUID[];
  launchpad: UUID | null;
  cores: [
    {
      core: UUID | null;
      flight: number | null;
      gridfins: boolean | null;
      legs: boolean | null;
      reused: boolean | null;
      landing_attempt: boolean | null;
      landing_success: boolean | null;
      landing_type: string | null;
      landpad: UUID | null;
    }
  ];
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
  };
  auto_update: boolean;
}
