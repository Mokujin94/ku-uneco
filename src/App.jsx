import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthProvider } from "./store/AuthStore";

const App = () => {
  return (
    <div className="content">
      <AuthProvider>
        <Header/>
        <AppRouter/>
        <Footer/>
      </AuthProvider>
    </div>
  );
};

export default App;
