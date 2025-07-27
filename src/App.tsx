import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Campaign from "./pages/Campaign/Campaign";
import Members from "./pages/Members/Members";
import Towns from "./pages/Towns/Towns";
import Keywords from "./pages/Keywords/Keywords";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <>
            <Topbar />
            <main>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Campaign />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/towns" element={<Towns />} />
                    <Route path="/keywords" element={<Keywords />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
