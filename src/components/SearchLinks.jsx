import { Route, Routes, Navigate } from "react-router-dom";
import Results from "./Results";

const SearchLinks = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/:section" element={<Results />} />
      </Routes>
    </div>
  );
};

export default SearchLinks;
