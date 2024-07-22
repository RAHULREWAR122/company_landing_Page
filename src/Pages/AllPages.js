import CompanyLogos from './CompanyLogos/companyLogos'
import FullDevelopmentCycle from './DevelopedProjects/FullDevCycle/page'
import Projects from './Projects/page'
import MostPopularProjects from './MostProjects/page'
import DiscussPage from './DiscussProject/page'
import AppDevelopmentStagePage from './AppDevelopmentStagePage/page'
import OurTeam from './OurTeamPage/page'
import FAQPage from './FAQPage/page'



function AllPages() {
  return (
    <>
     <CompanyLogos />
     <FullDevelopmentCycle/>
     <Projects/>
     <MostPopularProjects/>
     <DiscussPage/>
     <AppDevelopmentStagePage/>
     <OurTeam/>
     <FAQPage/>
    </>
  )
}

export default AllPages