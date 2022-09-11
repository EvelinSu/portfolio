import React from 'react';
import './styles/App.css';
import HomePage from "./Pages/HomePage/HomePage";
import MySkillsPage from "./Pages/MySkillsPage/MySkillsPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import Sidebar from "./Layout/Sidebar/Sidebar";

export const SECTIONS = ["Home", "Skills", "Portfolio", "Contacts"]

function App() {
    return (
        <div className="siteWrapper">
            <Sidebar sections={SECTIONS} />
            <div className={"sectionsContainer"}>
                <HomePage id={SECTIONS[0]} />
                <MySkillsPage id={SECTIONS[1]} />
                <PortfolioPage id={SECTIONS[2]} />
                <ContactsPage id={SECTIONS[3]} />
            </div>
        </div>
    );
}

export default App;
