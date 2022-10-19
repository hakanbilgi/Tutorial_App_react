import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {

const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

const getTutorial = async ()=>{
  
  const data = await axios(url);

};

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
