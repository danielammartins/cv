import ContentLayout from "./components/content-layout";
import Header from "./components/header";
import Name from "./components/name";
import Personal from "./components/sections/personal.tsx";
import Experience from "./components/sections/experience.tsx";
import Education from "./components/sections/education.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
  return (
  <>
    <Header></Header>
    <ContentLayout>
      <Name></Name>
      <Personal></Personal>
      <Experience></Experience>
      <Education></Education>
      <Footer></Footer>
    </ContentLayout>
  </>
  )
}
export default App
