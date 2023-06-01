import { Fragment, createContext, useState, useEffect } from "react";

import LiveViewer from "./pages/livePage";
import GlobalStyle from "./styles/globalStyles";

export const LiveContext = createContext();

const LiveProvider = ({ children }) => {
  const [liveId, setLiveId] = useState("null");

  const updateLiveId = (newLiveId) => {
    setLiveId(newLiveId);
  };

  return (
    <LiveContext.Provider value={{ liveId, updateLiveId }}>
      {children}
    </LiveContext.Provider>
  );
};

function App() {
  return (
    <Fragment>
      <LiveProvider>
        <LiveViewer />
        <GlobalStyle />
      </LiveProvider>
    </Fragment>
  );
}

export default App;
