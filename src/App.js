import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { RedirectUrl } from "./Url/RedirectUrl";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/:shortId" exact component={RedirectUrl} />
      </BrowserRouter>
    </div>
  );
}

export default App;
