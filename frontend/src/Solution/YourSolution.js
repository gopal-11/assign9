// frontend/src/Solution/YourSolution.js

// component to show table ui with pagination
const YourSolution = ({
  columns,
  rows,
  page,
  handlePageChange,
  totalPages,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((product) => {
            return (
              <tr>
                {columns.map((key) => (
                  <td>{product[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="page-container">
        <button className="margin-left10" onClick={() => handlePageChange(0)}>
          First
        </button>
        <button
          disabled={page === 0}
          className="margin-left10"
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        <span className="margin-left10">{page + 1}</span>
        <button
          disabled={page === totalPages}
          className="margin-left10"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
        <button
          className="margin-left10"
          onClick={() => handlePageChange(totalPages)}
        >
          Last
        </button>
      </div>
    </>
  );
};

export default YourSolution;
