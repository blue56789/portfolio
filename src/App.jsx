import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <div id="home" className="min-h-screen p-4 flex justify-center items-center">
                    <div className="max-w-5xl">
                        <p className="text-7xl font-semibold">Hello! I am Yash</p>
                        <p className="text-2xl"> I am a BCA student and an aspiring frontend developer.</p>
                    </div>
                </div>
                <Projects />
                <Contact />
            </div>
        </>
    )
}