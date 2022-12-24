import React from 'react';
import './styles/App.sass';
import HomePage from "./sections/HomePage/HomePage";
import MySkillsPage from "./sections/MySkillsPage/MySkillsPage";
import PortfolioPage from "./sections/PortfolioPage/PortfolioPage";
import ContactsPage from "./sections/ContactsPage/ContactsPage";
import Sidebar from "./layout/Sidebar/Sidebar";
import InfoBlock from "./layout/InfoBlock/InfoBlock";
import {ParticlesContainer} from "./components/Particle/Particle";

export const SECTIONS = ["Home", "Skills", "Portfolio", "Contacts"]

function App() {

    return (
        <div className="site__wrapper">
            <ParticlesContainer />
            <Sidebar sections={SECTIONS} />
            <div className={"sections__container"}>
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
