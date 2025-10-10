// import { describe, test, expect } from "vitest"; // or jest
import { sortArticles } from "./zennSort";
import type { ZennArticle } from "../../types/zenn";

// テスト用のモックデータ
const mockArticles = [
  {
    id: 1,
    title: "React入門",
    emoji: "⚛️",
    published_at: "2024-01-15",
    liked_count: 100,
  },
  {
    id: 2,
    title: "TypeScript基礎",
    emoji: "📘",
    published_at: "2024-02-20",
    liked_count: 50,
  },
  {
    id: 3,
    title: "Next.js実践",
    emoji: "🚀",
    published_at: "2024-03-10",
    liked_count: 150,
  },
] as ZennArticle[];

describe("sortArticles", () => {
  describe("数値ソート（liked_count）", () => {
    test("降順でソートできる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        order: "desc",
      });
      expect(result[0].liked_count).toBe(150);
      expect(result[1].liked_count).toBe(100);
      expect(result[2].liked_count).toBe(50);
    });

    test("昇順でソートできる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        order: "asc",
      });

      expect(result[0].liked_count).toBe(50);
      expect(result[1].liked_count).toBe(100);
      expect(result[2].liked_count).toBe(150);
    });

    test("orderを省略すると降順になる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
      });
      expect(result[0].liked_count).toBe(150);
      expect(result[1].liked_count).toBe(100);
      expect(result[2].liked_count).toBe(50);
    });
  });

  describe("文字列ソート（title）", () => {
    test("昇順でソートできる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "title",
        order: "asc",
      });

      expect(result[0].title).toBe("Next.js実践");
      expect(result[1].title).toBe("React入門");
      expect(result[2].title).toBe("TypeScript基礎");
    });

    test("降順でソートできる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "title",
        order: "desc",
      });

      expect(result[0].title).toBe("TypeScript基礎");
      expect(result[1].title).toBe("React入門");
      expect(result[2].title).toBe("Next.js実践");
    });
  });

  describe("検索フィルタ", () => {
    test("タイトルで絞り込みができる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        searchQuery: "React",
      });

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("React入門");
    });

    test("大文字小文字を区別せずに検索できる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        searchQuery: "react",
      });

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("React入門");
    });

    test("部分一致で検索できる", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        searchQuery: "入門",
      });

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("React入門");
    });

    test("該当なしの場合は空配列を返す", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        searchQuery: "存在しない",
      });

      expect(result).toHaveLength(0);
    });

    test("searchQueryが空文字の場合は全件返す", () => {
      const result = sortArticles({
        articles: mockArticles,
        sortKey: "liked_count",
        searchQuery: "",
      });

      expect(result).toHaveLength(3);
    });
  });

  describe("境界値・エッジケース", () => {
    test("空配列を渡しても問題なく動作する", () => {
      const result = sortArticles({
        articles: [],
        sortKey: "liked_count",
      });

      expect(result).toEqual([]);
    });

    test("1件のみの配列でも動作する", () => {
      const result = sortArticles({
        articles: [mockArticles[0]],
        sortKey: "liked_count",
      });

      expect(result).toHaveLength(1);
    });

    test("同じ値が複数ある場合も安定してソートする", () => {
      const sameValueArticles: ZennArticle[] = [
        { ...mockArticles[0], liked_count: 100 },
        { ...mockArticles[1], liked_count: 100 },
        { ...mockArticles[2], liked_count: 100 },
      ];

      const result = sortArticles({
        articles: sameValueArticles,
        sortKey: "liked_count",
      });

      expect(result).toHaveLength(3);
    });
  });

  describe("不変性", () => {
    test("元の配列を変更しない", () => {
      const original = [...mockArticles];
      const originalCopy = [...original];
      sortArticles({
        articles: original,
        sortKey: "liked_count",
        order: "asc",
      });

      // 元の配列が変更されていないことを確認
      expect(original).toEqual(originalCopy);
    });

    test("同じ引数で呼び出すと常に同じ結果を返す", () => {
      const params = {
        articles: mockArticles,
        sortKey: "liked_count" as keyof ZennArticle,
        order: "asc" as const,
      };

      const result1 = sortArticles(params);
      const result2 = sortArticles(params);

      expect(result1).toEqual(result2);
    });
  });

  describe("検索とソートの組み合わせ", () => {
    test("検索後にソートが適用される", () => {
      const articles: ZennArticle[] = [
        { ...mockArticles[0], title: "React初級", liked_count: 50 },
        { ...mockArticles[1], title: "React中級", liked_count: 100 },
        { ...mockArticles[2], title: "Vue入門", liked_count: 150 },
      ];

      const result = sortArticles({
        articles,
        sortKey: "liked_count",
        order: "asc",
        searchQuery: "React",
      });

      expect(result).toHaveLength(2);
      expect(result[0].liked_count).toBe(50);
      expect(result[1].liked_count).toBe(100);
    });
  });
});
