"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { ZennArticle } from "@/types/zenn";
import { sortArticles } from "@/lib/utils/zennSort";
import ArticleCard from "@/components/ui/Card/ArticleCard";
import CardsContainer from "@/components/ui/CardsContainer";
import Sort from "../Sort/Sort";
import Search from "../Search";
import styles from "./index.module.scss";

type SortKey = keyof ZennArticle;
type Order = "desc" | "asc";

type Props = {
  initialArticles: ZennArticle[];
  initialSortKey: SortKey;
  initialOrder: Order;
  initialSearchQuery: string;
};

export default function ArticlesClient({
  initialArticles,
  initialSortKey,
  initialOrder,
  initialSearchQuery,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sortSelectAreaRef = useRef<HTMLDivElement>(null);
  const [sortKey, setSortKey] = useState<SortKey>(initialSortKey);
  const [order, setOrder] = useState<Order>(initialOrder);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [isSelectAreaOpen, setIsSelectAreaOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sortSelectAreaRef.current &&
        !sortSelectAreaRef.current.contains(e.target as Element)
      ) {
        setIsSelectAreaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, []);

  const updateURL = (
    newSortKey: SortKey,
    newOrder: Order,
    newSearchQuery: string
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", newSortKey);
    params.set("order", newOrder);
    if (newSearchQuery) {
      params.set("searchQuery", newSearchQuery);
    } else {
      params.delete("searchQuery");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSort = (value: SortKey) => {
    const newSortKey = value;
    setSortKey(newSortKey);
    setIsSelectAreaOpen(false);
    updateURL(newSortKey, order, searchQuery);
  };

  const handleOrder = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    updateURL(sortKey, newOrder, searchQuery);
  };

  const handleSelectArea = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsSelectAreaOpen(!isSelectAreaOpen); 
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value as string;
    setSearchQuery(newSearchQuery);
    updateURL(sortKey, order, newSearchQuery);
  };

  const sortedData = sortArticles({
    articles: initialArticles,
    sortKey,
    order,
    searchQuery,
  });

  return (
    <>
      <div className={clsx(
        styles["c-articles__filter"]
      )}>
        <Search
          label="タイトル検索"
          onChange={handleSearch}
          defaultValue={searchParams.get("searchQuery")?.toString()}
          placeholder="記事をタイトル検索"
          className={clsx(
            styles["c-articles__filter-search"]
          )}
        />
        <Sort
          handleSelectArea={handleSelectArea}
          isSelectAreaOpen={isSelectAreaOpen}
          sortSelectAreaRef={sortSelectAreaRef}
          handleSort={handleSort}
          handleOrder={handleOrder}
          order={order}
          sortKey={sortKey}
          className={clsx(
            styles["c-articles__filter-sort"]
          )}
        />
      </div>

      <CardsContainer className={clsx(
        styles["c-articles__container"]
      )}>
        {sortedData.length !== 0 ? (
          sortedData.map((article: ZennArticle) => (
            <ArticleCard article={article} key={article.id} />
          ))
        ) : searchQuery ? (
          <p>検索結果が見つかりません</p>
        ) : (
          <p>現在投稿はございません</p>
        )}
      </CardsContainer>
    </>
  );
}
