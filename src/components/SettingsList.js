import React from "react";
import "./Settings.css";
import { useTranslation } from 'react-i18next';

const Settings = ({ onClose }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  const currentLanguage = i18n.language; // Получаем текущий активный язык

  return (
    <div className="settingContant" onClick={onClose}>
      <div className="modal-content">
        <h2>{t('setting')}</h2>
<p>choose language:</p>
        <button
          className={`buttonLoc ${currentLanguage === 'en' ? 'activeLan' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          en
        </button>

        <button
          className={`buttonLoc ${currentLanguage === 'ru' ? 'activeLan' : ''}`}
          onClick={() => changeLanguage('ru')}
        >
          ru
        </button>
      </div>
    </div>
  );
};

export default Settings;
