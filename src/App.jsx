import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthProvider } from "./store/AuthStore";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <div className="content">
            <ScrollToTop />
            <AuthProvider>
                <Header />
                <AppRouter />
                <Footer />
            </AuthProvider>
        </div>
    );
};

export default App;
