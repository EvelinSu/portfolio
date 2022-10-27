import React, {useEffect} from 'react';
import './styles/App.sass';
import HomePage from "./Pages/HomePage/HomePage";
import MySkillsPage from "./Pages/MySkillsPage/MySkillsPage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import Sidebar from "./Layout/Sidebar/Sidebar";
import InfoBlock from "./Layout/InfoBlock/InfoBlock";

export const SECTIONS = ["Home", "Skills", "Portfolio", "Contacts"]

function App() {
    useEffect(() => {
        alert('my portfolio in progress ｡ﾟ(｡ﾉωヽ｡)ﾟ｡')
    }, [])
    return (
        <div className="site__wrapper">
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
