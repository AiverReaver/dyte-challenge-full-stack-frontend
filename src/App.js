import "./App.css";
import { LoginForm } from "./Auth/LoginForm";
import { useCallback, useEffect, useState } from "react";
import axios, { updateTokenHeadersInAxiosInstance } from "./axios";
import { UrlList } from "./Url/UrlList";
import { Shorten } from "./Url/Shorten";
import {BrowserRouter, Route} from 'react-router-dom'
import { Home } from "./Home";

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
