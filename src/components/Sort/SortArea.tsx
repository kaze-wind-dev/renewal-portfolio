import clsx from "clsx";
import { MdClose } from "react-icons/md";
import type { SortKey } from "@/types/zenn";
import styles from "./index.module.scss";

export type SelectAreaOption = {
  label: string;
  value: SortKey;
};
const selectAreaOptions: SelectAreaOption[] = [
  {
    label: "投稿順",
    value: "published_at",
  },
  {
    label: "いいね数",
    value: "liked_count",
  },
];

export interface SortAreaProps {
  handleSelectArea: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isSelectAreaOpen: boolean;
  sortSelectAreaRef: React.RefObject<HTMLDivElement | null>;
  handleSort: (value: SortKey) => void;
  sortKey: SortKey;
}

const SortArea = ({
  handleSelectArea,
  isSelectAreaOpen,
  sortSelectAreaRef,
  handleSort,
  sortKey,
}: SortAreaProps) => {
  return (
    <div
      className={clsx(styles["c-sort-select__area"], {
        [styles["c-sort-select__area--active"]]: isSelectAreaOpen,
      })}
      ref={sortSelectAreaRef}
    >
      <button
        className={clsx(styles["c-sort__close-button"])}
        onClick={handleSelectArea}
        aria-label="並び替えのメニューを閉じる"
        tabIndex={0}
      >
        <MdClose className={clsx(styles["c-sort__close-button__icon"])} aria-hidden="true" />
      </button>
      {selectAreaOptions.map((options) => {
        const isCurrent = options.value === sortKey;
        return (
          <div
            className={clsx(styles["c-sort-select__item"], {
              [styles["c-sort-select__item--current"]]: isCurrent,
            })}
            key={options.value}
            onClick={() => {
              handleSort(options.value);
            }}
            role="button"
            tabIndex={0}
            aria-current={isCurrent}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSort(options.value);
              }
            }}
          >
            {options.label}
          </div>
        );
      })}
    </div>
  );
};

export default SortArea;
