import React, { useContext } from "react";
import user from "../../assets/loginBg.jpeg";
import { DarkMode } from "../../context/Darkmode";

const Rightbar = () => {
	const {dark, setDark} = useContext(DarkMode);
	return (
		<div className="w-[35%] sticky h-[calc(100vh-64px)] bg-slate-200 top-[64px] overflow-scroll scroll-smooth scrollbar-hide">
			<div className={dark ? " bg-slate-300 p-[20px] space-y-5":" p-[20px] space-y-5"}>
				<div className={dark ?"bg-slate-600 rounded-md p-[20px] shadow-lg text-white" : "item shadow-lg bg-white rounded-md p-[20px]"}>
					<span className={dark? "text-white":" text-gray-700"}>Suggestions For You</span>
					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<span className="font-semibold">John Doe</span>
						</div>
						<div className="buttons flex gap-[10px] items-center">
							<button className="border-none p-1 text-sm bg-[#5271ff] text-white">
								Follow
							</button>
							<button className="border-none p-1 text-sm bg-[#f0544f] text-white">
								Dismiss
							</button>
						</div>
					</div>
					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<span className="font-semibold">John Doe</span>
						</div>
						<div className="buttons flex gap-[10px] items-center">
							<button className="border-none p-1 text-sm bg-[#5271ff] text-white">
								Follow
							</button>
							<button className="border-none p-1 text-sm bg-[#f0544f] text-white">
								Dismiss
							</button>
						</div>
					</div>
				</div>

				<div className={dark ?"bg-slate-600 space-y-2 rounded-md p-[20px] shadow-lg text-white" : "item  space-y-2  shadow-lg bg-white rounded-md p-[20px]"}>
					<span className={dark? "text-white":" text-gray-700"}>Latest Activities</span>

					<div className="user flex items-center text-slate-500 justify-between">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<p className="">
								<span className={dark ? "text-white font-semibold" :"text-black font-semibold"}>John Doe</span>{" "}
								changed their cover picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user flex items-center text-slate-500 justify-between ">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<p className="">
								<span className={dark ? "text-white font-semibold" :"text-black font-semibold"}>John Doe</span>{" "}
								changed their cover picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user flex items-center text-slate-500 justify-between ">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<p className="">
								<span className={dark ? "text-white font-semibold" :"text-black font-semibold"}>John Doe</span>{" "}
								changed their cover picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user flex items-center text-slate-500 justify-between ">
						<div className="userInfo flex items-center gap-[14px]">
							<img
								src={user}
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
							<p className="">
								<span className={dark ? "text-white font-semibold" :"text-black font-semibold"}>John Doe</span>{" "}
								changed their cover picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
				</div>

				<div className={dark ?"bg-slate-600 rounded-md p-[20px] shadow-lg text-white" : "item shadow-lg bg-white rounded-md p-[20px]"}>
					<span className={dark? "text-white":" text-gray-700"}>Online Friends</span>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>

					<div className="user flex items-center justify-between my-[20px]">
						<div className="userInfo flex items-center gap-[14px]">
							<div className="online relative">
								<img
									src={user}
									alt=""
									className="w-11 h-11 rounded-full object-cover"
								/>
								<div className=" absolute w-3 h-3 top-0 right-0 rounded-full bg-green-500"></div>
							</div>
							<span className="font-semibold">John Doe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rightbar;
