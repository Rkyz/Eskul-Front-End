import BarChart from "../../../components/Admin/Chart/BarChart";
import Jumbotron from "../../../components/Admin/Jumbotron/Jumbotron";
import SideNav from "../../../components/Admin/Layouts/SideNav";
import Table from "../../../components/Admin/Table/Table";
import TopNav from "../../../components/Admin/Layouts/TopNav"
import {useState} from "react";
import Profile from "../../../components/Admin/Profile/Profile";

const Dashboard = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };
    const [openProfile, setOpenProfile] = useState(false);

    const toggleOpenProfile = () => {
        setOpenProfile(!openProfile);
    };


    return (
        <> < div className = "flex overflow-hidden " > <SideNav expanded={expanded} toggleExpansion={toggleExpansion}/>
        <div
            className={`w-full transition-all overflow-hidden duration-[700ms] ${expanded
                ? 'lg:ml-[65.5px]'
                : 'lg:ml-[320px]'}`}>
            <TopNav toggleExpansion={toggleExpansion} expanded={expanded} toggleOpenProfile={toggleOpenProfile}/>
            <Jumbotron expanded={expanded}/>
            <BarChart/>
            <Table/>
            <Profile openProfile={openProfile} toggleOpenProfile={toggleOpenProfile} />
            <div className="text-white bg-primary h-32 flex items-center px-7 mt-[80px] gap-2">Create By<span className="text-yellow-500">Rio Alamsyah</span></div>
        </div>
    </div>
</>
    )
}

export default Dashboard