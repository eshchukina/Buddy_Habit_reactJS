import React from "react";
import "./Instruction.css";
function Instruction() {
return(

    <div className="instruction">
      <p>
        {" "}
        Welcome to the <span className="highlighName">Buddy Habbit</span> - your
        personalized tool for building positive habits and achieving your goals!
        This app is designed to empower you on your journey to self-improvement
        by helping you track and cultivate daily habits that contribute to a
        healthier and more productive lifestyle
      </p>

      <p>Key Features:</p>

      <div className="keyFeaturesContainer">
        <p>
          Intuitive Habit Dashboard: Visualize your habits at a glance with our
          user-friendly dashboard. Track your progress effortlessly and stay
          motivated on your path to success
        </p>
        <p>
          Customizable Habit Categories: Tailor the app to your needs by custom
          habit categories. Whether it's fitness, mindfulness, or productivity,
          we've got you covered.
        </p>

        <p>
          Daily Reminders: Set personalized reminders to keep you on track.
          Establish a routine and receive notifications to ensure you never miss
          a beat.
        </p>
        <p>
          Insightful Statistics: Gain valuable insights into your habits with
          detailed statistics and charts. Identify trends, celebrate milestones,
          and adjust your strategy for continuous improvement.
        </p>
        <p>
          Achievement Badges: Stay motivated with achievement badges! Earn
          rewards for consistency and challenge yourself to unlock new
          milestones.
        </p>

        <p>
          Community Support: Connect with like-minded individuals in our
          community. Share your progress, exchange tips, and cheer each other on
          as you work towards your goals.
        </p>

        <p>
          Sync Across Devices: Access your habit data anytime, anywhere.
          Seamlessly sync your progress across multiple devices to stay
          connected and in control.
        </p>
      </div>
      <p>How to Use:</p>
      <div className="keyFeaturesContainer">
        <p>
          Create Your Habits: Start by adding habits you want to cultivate.
          Define the frequency, set achievable targets, and choose your
          preferred tracking metrics.
        </p>
        <p>
          Track Your Progress: Log your daily activities effortlessly. Mark off
          completed habits and watch your progress accumulate over time.
        </p>
        <p>
          Stay Inspired: Use the app's features to stay inspired and motivated.
          Celebrate your successes and learn from challenges to foster
          continuous personal growth.
        </p>
        <p>
          Download the Habit Tracker app now and embark on a journey towards a
          healthier, more positive lifestyle!
        </p>
      </div>
    </div>
  );
}
export default Instruction;