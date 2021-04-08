import React from 'react';
import {Navbar} from '../components/navbar';
import Sidebar from "../components/sidebar/Sidebar";
import SidebarElement from "../components/sidebar/SidebarElement";

export default function HomeScreen() {
    return <div>
        <Navbar title="Shop" user={{firstName: "Finn", lastName: "Kiesinger", username: "finnkiesinger"}} />
        <Sidebar>
            <SidebarElement title={"Title"} />
        </Sidebar>
    </div>
}
