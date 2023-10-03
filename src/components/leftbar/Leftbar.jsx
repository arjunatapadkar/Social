import {
	AlarmTwoTone,
	CalendarMonthOutlined,
	Groups2,
	MonetizationOn,
	OndemandVideoOutlined,
	OtherHouses,
} from "@mui/icons-material";
import {
	PersonPinOutlined,
	PhotoSizeSelectActual,
	SportsEsports,
	Textsms,
	Videocam,
	VideoLibrary,
	YouTube,
} from "@mui/icons-material";
import React, { useContext } from "react";
import user from "../../assets/loginBg.jpeg";
import { DarkMode } from "../../context/Darkmode";

const Leftbar = () => {

	const {dark, setDark} = useContext(DarkMode);

	return (
		<div className="leftbar w-[15%] z-10 sticky h-[calc(100vh-64px)]  top-[64px] scroll-smooth overflow-scroll scrollbar-hide">
			<div className={
				dark ? "text-white p-[20px]  bg-slate-600" : "p-[20px]"
			}
			
			
			>
				<div className="menu flex flex-col gap-3 mb-6">
					<div className="user flex items-center gap-3 font-semibold">
						<img
							src={user}
							alt=""
							className=" w-8 h-8 rounded-full object-cover cursor-pointer"
						/>
						<span className=" text-sm cursor-pointer">John Doe</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<PersonPinOutlined className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Friends</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<Groups2 className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "}/>
						<span className=" text-sm">Groups</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<OtherHouses className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Marketplace</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<YouTube className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Watch</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<AlarmTwoTone className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Memories</span>
					</div>
				</div>

				<hr className=" my-3 bg-slate-400 h-[0.5px] w-full" />

				<div className="menu flex flex-col gap-3 mb-6">
					<span className=" text-sm">Your shortcuts</span>

					<div className="item flex items-center gap-3 font-semibold">
						<CalendarMonthOutlined className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "}/>
						<span className=" text-sm">Events</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<SportsEsports className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Gaming</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<PhotoSizeSelectActual className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Gallery</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<Videocam className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Videos</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<Textsms className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Messages</span>
					</div>
				</div>

				<hr className=" my-3 bg-slate-400 h-[0.5px] w-full" />

				<div className="menu flex flex-col gap-3 mb-6">
					<span className="text-sm">Others</span>

					<div className="item flex items-center gap-3 font-semibold">
						<MonetizationOn className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Fundraiser</span>
					</div>

					<div className="item flex items-center gap-3 font-semibold">
						<VideoLibrary className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "}/>
						<span className=" text-sm">Tutorials</span>
					</div>
					<div className="item flex items-center gap-3 font-semibold">
						<OndemandVideoOutlined className={dark ? "text-white scale-125 mr-2 relative":" text-blue-800 relative scale-125 mr-2  "} />
						<span className=" text-sm">Courses</span>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Leftbar;
