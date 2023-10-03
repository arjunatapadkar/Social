import { FavoriteOutlined, Share, Textsms } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/loginBg.jpeg";
import { DarkMode } from "../../context/Darkmode";

const Posts = () => {
	const { dark, setDark } = useContext(DarkMode);

	const posts = [
		{
			id: 1,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "am eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim a",
			img: "https://images.pexels.com/photos/16387810/pexels-photo-16387810/free-photo-of-people-walking-on-rock-at-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 2,
			name: "Atp",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "pisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat qu",
			img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
		},

		{
			id: 3,
			name: "Atp",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "em ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate v",
			img: "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=600",
		},

		{
			id: 4,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "e voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non",
			img: "https://images.pexels.com/photos/18550029/pexels-photo-18550029/free-photo-of-ghost-in-the-shell.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 5,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "chitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq",
			img: "https://images.pexels.com/photos/18169059/pexels-photo-18169059/free-photo-of-silhouette-of-a-cowboy-on-a-horse-in-a-morning-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 6,
			name: "Atp",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "e voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non",
			img: "https://images.pexels.com/photos/18427797/pexels-photo-18427797/free-photo-of-light-sea-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 7,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ",
			img: "https://images.pexels.com/photos/18331865/pexels-photo-18331865/free-photo-of-cold-snow-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 8,
			name: "Atp",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: " extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circ",
			img: "https://images.pexels.com/photos/18141661/pexels-photo-18141661/free-photo-of-a-woman-with-her-dog-walking-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},

		{
			id: 9,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "icta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
			img: "https://images.pexels.com/photos/9909151/pexels-photo-9909151.jpeg?auto=compress&cs=tinysrgb&w=600",
		},

		{
			id: 10,
			name: "john Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/10990472/pexels-photo-10990472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			desc: "l eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas null",
			img: "https://images.pexels.com/photos/18407675/pexels-photo-18407675/free-photo-of-man-in-hat-and-jacket-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
		},
	];

	return (
		<div className="posts w-full overflow-hidden gap-y-2">
			{posts.map((post) => (
				<div
					className={
						dark
							? "p-4 bg-slate-600 overflow-x-hidden rounded-xl mb-7 shadow-xl"
							: "bg-white overflow-x-hidden rounded-xl post w-full p-4 mb-7 shadow-xl"
					}
				>
					<div className="flex justify-between mb-7">
						<div className="flex justify-center items-center gap-2">
							<img src={post.profilePic} className="h-10 w-10 rounded-full cursor-pointer" />
							<div className="flex flex-col ">

								<Link to={`/profile/${post.userId}`}>
									<span className="text-lg cursor-pointer">{post.name}</span>
								</Link>

								<p className="text-sm">a few seconds ago</p>
							</div>
						</div>
						<div className="cursor-pointer">...</div>
					</div>

					<div className=" px-5 mb-2">{post.desc}</div>

					<div>
						<img src={post.img} className="w-full h-full px-5 mb-2 " />
					</div>

					<div className="flex gap-4 px-5 items-center justify-start">
						<div className="space-x-1">
							<FavoriteOutlined  className="cursor-pointer"/>
							<span>Likes</span>
						</div>
						<div className="space-x-1">
							<Textsms className="cursor-pointer"/>
							<span>Comments</span>
						</div>
						<div className="space-x-1">
							<Share className="cursor-pointer"/>
							<span>Share</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
