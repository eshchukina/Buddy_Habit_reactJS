import React, { useState, useEffect } from "react";
import "./Habit.css";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMinus,
  faVolleyball,
  faIcons,
  faGraduationCap,
  faUser,
  faHeartPulse,
  faLightbulb,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const HabitTracker = ({
  startDate,
  endDate,
  onHabitDataChange,
  onHabitsChange,
  onRemoveHabit,
  habits: propsHabits,
}) => {
  const [habits, setHabits] = useState(propsHabits || []); 

  const [newHabit, setNewHabit] = useState("");
  const [reps, setReps] = useState("");
  const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    setHabits(propsHabits || []);
  }, [propsHabits, setHabits]);

  const addHabit = () => {
    if (newHabit && reps) {
      const newHabitObj = {
        title: newHabit,
        reps: reps,
        initial: reps,
        complete: 0,
        finished: false,
        startDate: moment(),
        type: selectedType,
      };

      setHabits((prevHabits) => [...prevHabits, newHabitObj]);
      onHabitsChange((prevHabits) => [...prevHabits, newHabitObj]);
    }

    setNewHabit("");
    setReps("");
    setSelectedType("");
  };

  const removeHabit = (habit) => {
    setHabits((prevHabits) => prevHabits.filter((h) => h !== habit));
    onRemoveHabit(habit); 
  };

  const completeReps = (habit) => {
    if (habit.reps > 0) {
      setHabits((prevHabits) =>
        prevHabits.map((h) =>
          h === habit ? { ...h, reps: h.reps - 1, complete: h.complete + 1 } : h
        )
      );

      if (habit.reps === 1) {
        setHabits((prevHabits) =>
          prevHabits.map((h) => (h === habit ? { ...h, finished: true } : h))
        );
        onHabitDataChange(habit.complete + 1, habit.initial);
      }
    }
  };
  const decrementReps = (habit) => {
    if (habit.reps < habit.initial) {
      setHabits((prevHabits) =>
        prevHabits.map((h) =>
          h === habit ? { ...h, reps: h.reps + 1, complete: h.complete - 1 } : h
        )
      );

      if (habit.reps === habit.initial - 1) {
        setHabits((prevHabits) =>
          prevHabits.map((h) => (h === habit ? { ...h, finished: false } : h))
        );
      }
      onHabitDataChange(habit.complete - 1, habit.initial);
    }
  };

  return (
    <>
      <div className="habitText">
        <div className="inputContainer">
          <div>
            <h1>new habit tracker:</h1>
            <input
              type="text"
              placeholder="habit title"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="repetitions"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            <br />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">select type</option>
              <option value="sport">
                <FontAwesomeIcon icon={faVolleyball} />
                sport
              </option>
              <option value="hobby">
                <FontAwesomeIcon icon={faIcons} />
                hobby
              </option>
              <option value="study">
                <FontAwesomeIcon icon={faGraduationCap} /> study
              </option>
              <option value="life">
                <FontAwesomeIcon icon={faUser} /> life
              </option>
              <option value="health">
                <FontAwesomeIcon icon={faHeartPulse} /> health
              </option>
              <option value="thought">
                <FontAwesomeIcon icon={faLightbulb} /> thought
              </option>
            </select>
          </div>
          <button id="creator" onClick={addHabit}>
            add
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row habit">
          {habits
            .filter((habit) =>
              habit.startDate.isBetween(startDate, endDate, null, "[]")
            )
            .map((habit) => (
              <div key={habit.title} className="columns">
                <div className="titleContainer">
                  <div className="titleHabit">
                    
                    {!habit.finished}{" "}
                    {habit.type === "sport" && (
                      <FontAwesomeIcon icon={faVolleyball} />
                    )}
                    {habit.type === "hobby" && (
                      <FontAwesomeIcon icon={faIcons} />
                    )}
                    {habit.type === "study" && (
                      <FontAwesomeIcon icon={faGraduationCap} />
                    )}
                    {habit.type === "life" && <FontAwesomeIcon icon={faUser} />}
                    {habit.type === "health" && (
                      <FontAwesomeIcon icon={faHeartPulse} />
                    )}
                    {habit.type === "thought" && (
                      <FontAwesomeIcon icon={faLightbulb} />
                    )}
                    <div className="title">{" "}{habit.title}</div>
                  </div>
                  <h4>
                    <div>
                      {habit.complete}/{habit.initial}{" "}
                      {/* {habit.startDate.format('L')}  */}
                      end:{" "}
                      {habit.startDate
                        .clone()
                        .add(habit.reps, "days")
                        .format("L")}
                    </div>
                  </h4>
                  <button
                    className="progress delete"
                    onClick={() => removeHabit(habit)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                <div className="shellContainer">
                  <div className="shell">
                    <div
                      className="bar"
                      style={{
                        width:
                          100 - habit.complete * (100 / habit.initial) + "%",
                      }}
                    ></div>
                  </div>
                  <div className="lower">
                    <button
                      id="progress"
                      className="progress"
                      onClick={() => decrementReps(habit)}
                      disabled={habit.finished || habit.reps >= habit.initial}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button
                      id="progress"
                      className="progress"
                      onClick={() => completeReps(habit)}
                      disabled={habit.finished}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    {habit.finished && <div>Complete!</div>}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HabitTracker;