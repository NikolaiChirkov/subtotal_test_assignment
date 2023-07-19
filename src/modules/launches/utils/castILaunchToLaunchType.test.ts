import { DatePrecision } from "../types";
import { castILaunchToLaunchType } from "./castILaunchToLaunchType";

it("cast ILaunch to LaunchType correctly", () => {
  const launches = castILaunchToLaunchType([
    {
      fairings: null,
      tdb: false,
      links: {
        patch: {
          small: "https://images2.imgbox.com/df/53/3Ik1KR2O_o.png",
          large: "https://images2.imgbox.com/ed/f3/MdEzr8rE_o.png",
        },
        reddit: {
          campaign: null,
          launch: "http://www.reddit.com/r/spacex/comments/2rrdha",
          media: null,
          recovery: null,
        },
        flickr: {
          small: [],
          original: [
            "https://farm9.staticflickr.com/8666/16511391418_bb5cdbbd71_o.jpg",
            "https://farm9.staticflickr.com/8612/16848173281_035bdc6009_o.jpg",
            "https://farm9.staticflickr.com/8571/16699496805_bf39747618_o.jpg",
            "https://farm9.staticflickr.com/8650/16699496705_187e4e53fd_o.jpg",
            "https://farm9.staticflickr.com/8663/16077174554_370937efbe_o.jpg",
            "https://farm9.staticflickr.com/8638/16512101410_83763eb9ea_o.jpg",
            "https://farm9.staticflickr.com/8653/16077173984_17885d4bea_o.jpg",
            "https://farm8.staticflickr.com/7635/16848159582_40c0f9d25f_o.jpg",
          ],
        },
        presskit:
          "http://www.spacex.com/sites/spacex/files/spacex_nasa_crs-5_presskit.pdf",
        webcast: "https://www.youtube.com/watch?v=p7x-SumbynI",
        youtube_id: "p7x-SumbynI",
        article:
          "https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/",
        wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-5",
      },
      static_fire_date_utc: "2014-12-19T00:00:00.000Z",
      static_fire_date_unix: 1418947200,
      net: false,
      window: 0,
      rocket: "5e9d0d95eda69973a809d1ec",
      success: true,
      failures: [],
      details:
        "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.",
      crew: [],
      ships: [
        "5ea6ed2e080df4000697c906",
        "5ea6ed2f080df4000697c90b",
        "5ea6ed2f080df4000697c90c",
        "5ea6ed2f080df4000697c90f",
        "5ea6ed30080df4000697c912",
      ],
      capsules: ["5e9e2c5bf35918165f3b266a"],
      payloads: ["5eb0e4bdb6c3bb0006eeb1f6"],
      launchpad: "5e9e4501f509094ba4566f84",
      flight_number: 19,
      name: "CRS-5",
      date_utc: "2015-01-10T09:47:00.000Z",
      date_unix: 1420883220,
      date_local: "2015-01-10T05:47:00-04:00",
      date_precision: DatePrecision.Hour,
      upcoming: false,
      cores: [
        {
          core: "5e9e28a0f359187a3c3b2635",
          flight: 1,
          gridfins: true,
          legs: true,
          reused: false,
          landing_attempt: true,
          landing_success: false,
          landing_type: "ASDS",
          landpad: "5e9e3032383ecb761634e7cb",
        },
      ],
      auto_update: true,
    },
  ]);

  expect(launches[0]).toStrictEqual({
    name: "CRS-5",
    utcDate: "2015-01-10T09:47:00.000Z",
    imgSrc: "https://farm9.staticflickr.com/8666/16511391418_bb5cdbbd71_o.jpg",
    info: "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.",
  });
});
