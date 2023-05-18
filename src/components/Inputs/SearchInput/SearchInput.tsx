import { SearchIcon } from "@/Icons/Search";
import classes from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={classes.container}>
      <SearchIcon />
      <input type="text" placeholder="Search something here" />
      <span>⌘+K</span>
    </div>
  );
};

export { SearchInput, SearchInput as default };
