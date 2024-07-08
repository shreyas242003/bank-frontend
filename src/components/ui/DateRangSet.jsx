import Flatpickr from "react-flatpickr";

const DateRangSet = ({ filter, setfilter, filter1, filter2 }) => {
  const changeDate = (date) => {
    if (date.length === 2) {
      let startDate = date[0].toISOString().split("T")[0];
      let endDate = date[1].toISOString().split("T")[0];
      setfilter({
        ...filter,
        [filter1]: startDate,
        [filter2]: endDate,
      });
    }
  };
  return (
    <div>
      <label className="form-label">Filter by date</label>
      <Flatpickr
        options={{
          mode: "range",
        }}
        value={[filter[filter1], filter[filter2]]}
        className="form-control py-2"
        onChange={changeDate}
      />
    </div>
  );
};

export default DateRangSet;
