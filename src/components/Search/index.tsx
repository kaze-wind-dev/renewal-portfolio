import clsx from "clsx";
import { IoIosSearch } from "react-icons/io";
import styles from "./index.module.scss";

type SearchProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder: string;
  className?: string;
};

const Search = ({
  label,
  onChange,
  defaultValue,
  placeholder,
  className,
}: SearchProps) => {
  return (
    <div className={clsx(styles["c-search"], className)}>
      <label htmlFor="search" className={`sr-only`}>
        {label}
      </label>
      <IoIosSearch className={clsx(styles["c-search__icon"])}></IoIosSearch>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id="search"
        className={clsx(styles["c-search__box"])}
      />
    </div>
  );
};

export default Search;
