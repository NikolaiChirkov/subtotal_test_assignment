import reducer, { initialState, changeLaunchesSortType } from "./launchesSlice";

test("should return the initial state", () => {
  expect(reducer(initialState, changeLaunchesSortType("asc"))).toStrictEqual({
    networkQuery: {
      date_utc: {
        $gte: "2015-01-01T00:00:00.000Z",
        $lt: "2020-01-01T00:00:00.000Z",
      },
    },
    networkOptions: {
      sort: {
        date_utc: "asc",
      },
      pagination: false,
    },
  });
});
