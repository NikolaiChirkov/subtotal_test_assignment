type Options = {
  sort?: Record<string, "asc" | "desc">;
  pagination?: boolean;
};

export interface IPostBody {
  query: Record<string, Record<string, string> | string>;
  options?: Options;
}
