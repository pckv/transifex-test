import { FC, useState } from 'react';
import { withTranslation, WithTranslation } from "react-i18next";
import styles from './InteractiveButton.module.css';

const InteractiveButton: FC<WithTranslation> = ({ t }) => {
    const [toggled, setToggled] = useState(false);

    return <>
        <button 
            className={toggled ? styles.toggled : styles.button}
            onClick={() => setToggled(!toggled)}
        >
            {t('click_me')}
        </button>
    </>
}

export default withTranslation()(InteractiveButton);
