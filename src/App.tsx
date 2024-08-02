import { SECTIONS } from "@/common/constants";
import { Copyright } from "@/components/Copyright";
import { InfoBlock } from "@/components/InfoBlock";
import { Layout } from "@/layout";
import { ContactsSection, HomeSection, PortfolioSection, SkillsSection } from "@/sections";
import "@/styles/App.sass";

function App() {
  return (
    <Layout>
      <HomeSection id={SECTIONS.main} />
      <SkillsSection id={SECTIONS.skills} />
      <PortfolioSection id={SECTIONS.portfolio} />
      <InfoBlock />
      <ContactsSection id={SECTIONS.contacts} />
      <Copyright />
    </Layout>
  );
}

export default App;
