import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InteractiveButton.module.css';

const InteractiveButton: FunctionComponent = () => {
    const [toggled, setToggled] = useState(false);

    return <>
        <button 
            className={toggled ? styles.toggled : styles.button}
            onClick={() => setToggled(!toggled)}
        />
        <span></span>
    </>
}

export default InteractiveButton;
