import { ChangeEvent, FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import i18n, { locales } from '../../i18n';
import styles from './LanguageSelect.module.css';

const handleLangaugeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.currentTarget.value);
}

const LanguageSelect: FC<WithTranslation> = ({ t }) =>
    <div className={styles.container}>
        <label className={styles.label}>
            {t('choose_language')}
            :
        </label>
        <select value={i18n.language} onChange={handleLangaugeChange}>
            {locales.map((language, index) => 
                <option key={index} value={language}>
                    {t(`locale.${language}`)}
                </option>
                )
            }
        </select>
    </div>

export default withTranslation()(LanguageSelect);