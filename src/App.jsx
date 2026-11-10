import HelloReact from "./helloReact";
import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./scrollToTop";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <HelloReact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default App;
