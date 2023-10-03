import {
	EmailOutlined,
	GridViewOutlined,
	HomeOutlined,
	NotificationsOutlined,
	PersonOutline,
	SearchOutlined,
} from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/loginBg.jpeg";
import { DarkMode } from "../../context/Darkmode";

const Navbar = () => {
	const { dark, setDark } = useContext(DarkMode);

	return (
		<div className={dark ? "navbar flex items-center justify-between py-3 px-5 h-16 border-b text-white z-40 border-slate-400 sticky top-0 bg-slate-700" :
        "navbar flex items-center justify-between py-3 px-5 h-16 border-b z-40 border-slate-400 sticky top-0 bg-white"}>
			<div className="left flex items-center gap-7">
				<Link to="/">
					<span className= {dark ? "text-3xl font-bold text-white" : "text-3xl font-bold text-blue-800"}>Social</span>
				</Link>
				<HomeOutlined  className="cursor-pointer"/>
                <button onClick={()=>setDark(!dark)}>
				    <DarkModeOutlined className="cursor-pointer"/>
                </button>
				<GridViewOutlined className="cursor-pointer"/>
				<div className="search flex items-center justify-center gap-3 border border-slate-400 rounded-md overflow-hidden px-2 py-1">
					<SearchOutlined className="cursor-pointer"/>
					<input
						type="text"
						placeholder="Search..."
						className={dark ? "border-none bg-slate-700 outline-none w-80" : "border-none outline-none w-80"}
					/>
				</div>
			</div>
			<div className="right flex items-center gap-7">
				<PersonOutline className="cursor-pointer"/>
				<EmailOutlined className="cursor-pointer"/>
				<NotificationsOutlined className="cursor-pointer"/>
				<div className="user flex items-center gap-2 font-semibold">
					<img
						src={user}
						alt=""
						className=" w-7 h-7 rounded-full object-cover cursor-pointer"
					/>
					<span className="cursor-pointer">John Doe</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
