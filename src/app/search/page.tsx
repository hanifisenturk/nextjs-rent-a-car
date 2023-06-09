import { DateTracker } from "@/components/DateTracker/SearchVersion/DateTracker";
import classes from "./page.module.css";
import { CarList } from "@/components/CarList/CarList";

const SearchPage = () => {
  return (
    <div className={classes.container}>
      <DateTracker />
      <div className="mt-9">
        <CarList />
      </div>
    </div>
  );
};

export default SearchPage;
