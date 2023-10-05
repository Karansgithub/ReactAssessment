import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { NavLink } from "react-router-dom";
export default function Pagination({ page, setPage, totalPages }) {
  if (!totalPages) return null;
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-1 border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        <div className="text-sm font-semibold ">
          Page {page} of {totalPages}
        </div>
        <div className="ml-auto">
          {page > 0 && (
            <NavLink to={`/mywebsite/page=${Number(page) - 1}`}>
              <button
                onClick={() => handlePageChange(Number(page) - 1)}
                className="border-2 border-gray-300 py-1 px-2 rounded-md"
              >
                <GrFormPreviousLink />
              </button>
            </NavLink>
          )}
          {page < totalPages && (
            <NavLink to={`/mywebsite/page=${Number(page) + 1}`}>
              <button
                onClick={() => handlePageChange(Number(page) + 1)}
                className="border-2 border-gray-300 py-1 px-2 rounded-md ml-2"
              >
                <GrFormNextLink />
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
