import React from 'react';
import './styles/App.css';
import HomePage from "./Pages/HomePage/HomePage";
import MySkillsPage from "./Pages/MySkillsPage/MySkillsPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import Sidebar from "./Layout/Sidebar/Sidebar";
import InfoBlock from "./Layout/InfoBlock/InfoBlock";
import s from "./Pages/ContactsPage/styles.module.css";

export const SECTIONS = ["Home", "Skills", "Portfolio", "Contacts"]

function App() {
    return (
        <div className="siteWrapper">
            <Sidebar sections={SECTIONS} />
            <div className={"sectionsContainer"}>
                <HomePage id={SECTIONS[0]} />
                <MySkillsPage id={SECTIONS[1]} />
                <PortfolioPage id={SECTIONS[2]} />
                <InfoBlock />
                <ContactsPage id={SECTIONS[3]} />
                <div className={"footer"}>
                    Copyright © 2022. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default App;
