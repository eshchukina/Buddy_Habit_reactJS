import React from "react";
import "./Instruction.css";
import { useTranslation } from 'react-i18next';


function Instruction() {
  const { t } = useTranslation();


return(

    <div className="instruction">
      <p>
        
        {t('welcome')}<span className="highlighName">Buddy Habbit</span>{t('part1')}
      </p>

      <p>{t('keyFeatures')}:</p>

      <div className="keyFeaturesContainer">
        <p>
        {t('part2')}
        </p>
        <p>
        {t('part3')}
        </p>

        <p>
        {t('part4')}
        </p>
        <p>
        {t('part5')}
        </p>
      

      </div>
      <p>{t('howToUse')}:</p>
      <div className="keyFeaturesContainer">
        <p>
        {t('part6')}
        </p>
        <p>
        {t('part7')}
        </p>
        <p>
        {t('part8')}
        </p>
        <p>
        {t('part9')}
        </p>
      </div>
    </div>
  );
}
export default Instruction;