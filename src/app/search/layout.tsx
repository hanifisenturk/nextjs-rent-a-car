import { Sidebar } from "@/components/Sidebar/Sidebar";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex relative">
      <Sidebar />
      {children}
    </main>
  );
};

export default SearchLayout;
