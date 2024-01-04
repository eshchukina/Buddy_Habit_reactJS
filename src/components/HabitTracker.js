import React, { useState, useEffect } from "react";
import "./Habit.css";
import moment from "moment";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();


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
            <h1>
            {t('newHabitTracker')}:
            </h1>
            <input
              type="text"
              placeholder={t('habitTitle')}

              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder= {t('repetitions')}
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            <br />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value=""> {t('category')}</option>
              <option value= {t('sport')}>
                <FontAwesomeIcon icon={faVolleyball} />
                {t('sport')}
              </option>
              <option value={t('hobby')}>
                <FontAwesomeIcon icon={faIcons} />
                  {t('hobby')}
              </option>
              <option value={t('study')}>
                <FontAwesomeIcon icon={faGraduationCap} /> 
                {t('study')}

              </option>
              <option value={t('life')}>
                <FontAwesomeIcon icon={faUser} /> 
                {t('life')}

              </option>
              <option value= {t('health')}
>
                <FontAwesomeIcon icon={faHeartPulse} /> 
                                   {t('health')}

              </option>
              <option value= {t('thought')}>
                <FontAwesomeIcon icon={faLightbulb} />
                {t('thought')} 
              </option>
            </select>
          </div>
          <button id="creator" onClick={addHabit}>
         {t('add')} 

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
                    {habit.type === t("sport") && (
                      <FontAwesomeIcon icon={faVolleyball} title={t("sport")} />
                    )}
                    {habit.type === t('hobby') && (
                      <FontAwesomeIcon icon={faIcons} title={t("hobby")}/>
                    )}
                    {habit.type === t("study") && (
                      <FontAwesomeIcon icon={faGraduationCap} title={t("study")}/>
                    )}
                    {habit.type === t("life") && <FontAwesomeIcon icon={faUser} title={t("life")}/>}
                    {habit.type === t("health") && (
                      <FontAwesomeIcon icon={faHeartPulse} title={t("health")} />
                    )}
                    {habit.type === t("thought") && (
                      <FontAwesomeIcon icon={faLightbulb} title={t("thought")} />
                    )}
                    <div className="title">{" "}{habit.title}</div>
                  </div>
                  <h4>
                    <div>
                      {habit.complete}/{habit.initial}{" "}
                      {/* {habit.startDate.format('L')}  */}
                  
                      {t('end')}:

                      {" "}
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