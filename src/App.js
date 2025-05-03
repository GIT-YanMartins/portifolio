import React from "react"
import Header from "./Components/Header/header"
import Main from "./Components/Main/main"
import Footer from "./Components/Footer/footer"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
 



