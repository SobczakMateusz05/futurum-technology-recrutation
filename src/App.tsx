import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <>
            <Topbar />
            <main>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
