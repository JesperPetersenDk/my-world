import "./App.css";
import Welcome from "./components/Welcome";
import ImgView from "./components/img";
import Sum from "./components/sum";
import Btn from "./components/btn";
import ConsoleBtn from "./components/ConsoleBtn";

const user = {
  firstName: "Test",
  lastName: "Work",
};

const imgData = {
  imgUrl: "https://img.stackshare.io/service/1020/OYIaJ1KK.png",
  altText: "Netflix"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome firstName={user.firstName} lastName={user.lastName} />
        <ImgView imgUrl={imgData.imgUrl} altText={imgData.altText} />
        <Sum a={23} b={22} />
        <Btn />
        <ConsoleBtn/>
      </header>
    </div>
  );
}

export default App;
