import { isCurrent } from "./navigation";

test("同じパスの場合はtrueを返す", () => {
  expect(isCurrent("/", "/")).toBe(true);
  expect(isCurrent("/works", "/works")).toBe(true);
});

test("異なるパスの場合はfalseを返す", () => {
  expect(isCurrent("/works", "/")).toBe(false);
  expect(isCurrent("/works/123", "/articles")).toBe(false);
  expect(isCurrent("/articles?sort=liked_count&order=desc", "/works")).toBe(
    false
  );
});

test("クエリパラメータがあってもパスが同じならtrueを返す", () => {
  expect(isCurrent("/articles?sort=liked_count&order=desc", "/articles")).toBe(
    true
  );
  expect(
    isCurrent(
      "/articles?sort=liked_count&order=asc&searchQuery=keyword",
      "/articles"
    )
  ).toBe(true);
});
