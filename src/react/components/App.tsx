import logo from './logo.svg';
import styles from './App.module.css';
import InteractiveButton from './InteractiveButton';
import { FC } from "react";
import { Trans, WithTranslation, withTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";

const App: FC<WithTranslation> = ({ t }) =>
    <div className={styles.container}>
        <header className={styles.header}>
            <LanguageSelect />

            <h1>{t('tutorial.introduction')}</h1>

            <img src={logo} className={styles.logo} alt="logo" />
            <p>
                <Trans i18nKey="edit_info">
                    Edit <code>src/App.tsx</code> and save to reload.
                </Trans>
            </p>

            <InteractiveButton />

            <a
                className={styles.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('learn_react')}
            </a>
            
            <div className={styles.tutorial}>
                <p>{t('tutorial.step1')}</p>
                <p>{t('tutorial.step2')}</p>
                <p>{t('tutorial.step3')}</p>
            </div>
        </header>
    </div>;

export default withTranslation()(App);
