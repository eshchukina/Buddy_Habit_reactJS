import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      setting: 'settings',
      habits:"habits",
      instruction:"instruction",
      share:"share",
      contactUs:"contact us",
      logOut:"log out",
      welcome:"Welcome to the",
      part1:" - your personalized tool for building positive habits and achieving your goals! This app is designed to empower you on your journey to self-improvement by helping you track and cultivate daily habits that contribute to a healthier and more productive lifestyle.",
      keyFeatures:"Key Features",
      part2:" Intuitive Habit Dashboard: Visualize your habits at a glance with our user-friendly dashboard. Track your progress effortlessly and stay motivated on your path to success.",
      part3:" Customizable Habit Categories: Tailor the app to your needs by custom habit categories. Whether it's fitness, mindfulness, or productivity, we've got you covered.",
      part4:" Daily Reminders: Set personalized reminders to keep you on track. Establish a routine and receive notifications to ensure you never miss a beat.",    
        part5:" Gain valuable insights into your habits with detailed statistics and charts. Identify trends, celebrate milestones, and adjust your strategy for continuous improvement.",
        howToUse:"How to Use",
        part6:" Create Your Habits: Start by adding habits you want to cultivate. Define the frequency, set achievable targets, and choose your preferred tracking metrics.",
        part7:" Track Your Progress: Log your daily activities effortlessly. Mark off completed habits and watch your progress accumulate over time.",
        part8:"Use the app's features to stay inspired and motivated. Celebrate your successes and learn from challenges to foster continuous personal growth.",
        part9:" Embark on a journey towards a healthier, more positive lifestyle!",

        newHabitTracker:"new habit tracker:",
        habitTitle:"habit title",
        repetitions:"repetitions",
        category:"category",
        sport:"sport",
        hobby:"hobby",
        study:"study",
        life:"life",
        health:"health",
        thought:"thought",
        add:"add",
        end:"end",
    },
  },
  ru: {
    translation: {
        setting: 'настройки',
        habits:"привычки",
        instruction:"инструкция",
        share:"поделится",
        contactUs:"связаться с нами",
        logOut:"выйти",
        welcome:"Добро пожаловать в",
        part1:" - ваш персонализированный инструмент для формирования положительных привычек и достижения ваших целей! Это приложение создано, чтобы поддерживать вас в вашем пути к самосовершенствованию, помогая отслеживать и развивать ежедневные привычки, способствующие здоровому и более продуктивному образу жизни.",
        keyFeatures:"Ключевая особенность",
        part2:"Интуитивная панель управления привычками: Визуализируйте свои привычки на лету с помощью нашей удобной в использовании панели. Отслеживайте свой прогресс легко и оставайтесь мотивированными на пути к успеху.",
        part3:"Настраиваемые категории привычек: Настройте приложение под свои потребности, создавая собственные категории привычек. Будь то фитнес, осознанность или продуктивность, у нас есть всё, что вам нужно.",
        part4:"Ежедневные напоминания: Создавайте персонализированные напоминания, чтобы сохранять направление. Установите регулярный график и получайте уведомления, чтобы гарантировать, что ни один важный момент вам не ускользнет.",
        part5:"Получайте ценные исследования ваших привычек с детализированной статистикой и графиками. Выявляйте тенденции, празднуйте важные события и корректируйте свою стратегию для непрерывного улучшения.",
        howToUse:"Как использовать",
        part6:" Создавайте свои привычки: Начните с добавления привычек, которые вы хотите развивать. Определите частоту, установите достижимые цели и выберите предпочтительные метрики для отслеживания.",
        part7:"Отслеживайте свой прогресс: Легко вносите свои ежедневные активности. Отмечайте завершенные привычки и следите, как ваш прогресс накапливается со временем.",
        part8:"Используйте функции приложения, чтобы сохранять вдохновение и мотивацию. Празднуйте свои успехи и извлекайте уроки из вызовов для постоянного личностного роста.",
        part9:"Отправляйтесь в путешествие к более здоровому и позитивному образу жизни!",

        newHabitTracker:"новый трекер привычки",
        habitTitle:"название",
        repetitions:"кол-во повторений",
        category:"категория",
        sport:"спорт",
        hobby:"хобби",
        study:"учеба",
        life:"жизнь",
        health:"здоровье",
        thought:"мысли",
        add:"добавить",
        end:"окончание",





    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', // язык по умолчанию
    keySeparator: false, // не используем разделитель ключей
    interpolation: {
      escapeValue: false, // не экранируем строки, чтобы можно было использовать HTML-теги
    },
  });

export default i18n;
