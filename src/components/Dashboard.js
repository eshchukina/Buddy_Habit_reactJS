import React, { useState } from "react";
import moment from "moment";
import "./Dashboard.css";

import HabitTracker from "./HabitTracker";
import Calendar from "./Calendar";
import Chart from "./Chart";

const Dashboard = () => {
    const [startDate, setStartDate] = useState(moment().subtract(5, "day"));
    const [endDate, setEndDate] = useState(moment().add(3, "day"));
    const [habitComplete, setHabitComplete] = useState(0);
    const [habitInitial, setHabitInitial] = useState(0);

    const [typeSum, setTypeSum] = useState(0);
    const [habits, setHabits] = useState([]);

    const handleTypeChange = (newTypeSum) => {
        setTypeSum(newTypeSum);
      };

      const handleHabitsChange = (newHabits) => {
        setHabits(newHabits);
      };

      const handleDateChange = (newStartDate, newEndDate) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
      };

      const handleHabitDataChange = (complete, initial) => {
        setHabitComplete(complete);
        setHabitInitial(initial);
      };

      const handleRemoveHabit = (habitToRemove) => {
        const updatedHabits = habits.filter((habit) => habit !== habitToRemove);
        setHabits(updatedHabits);
      };

      return(
<div className="parent">
      <div className="div1">
        <Calendar onDateChange={handleDateChange} />
      </div>
      <div className="div2">
        <Chart key={habits.length} habits={habits} />
      </div>
      <div className="div3">
        <HabitTracker
          startDate={startDate}
          endDate={endDate}
          onHabitsChange={handleHabitsChange}
          onRemoveHabit={handleRemoveHabit}
          habits={habits}
          onHabitDataChange={handleHabitDataChange}
          handleTypeChange={handleTypeChange}
        />

</div>
</div>
  );
};

export default Dashboard;
