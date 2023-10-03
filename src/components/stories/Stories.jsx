import React from "react";
import user from "../../assets/loginBg.jpeg";

const Stories = () => {
    // temporary data
    const stories = [
        {
            id:1,
            name : "John Doe",
            img: "https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:2,
            name : "David",
            img: "https://images.pexels.com/photos/14902415/pexels-photo-14902415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:3,
            name : "Jane",
            img: 'https://images.pexels.com/photos/18550029/pexels-photo-18550029/free-photo-of-ghost-in-the-shell.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        },
        {
            id:4,
            name : "Jas",
            img: "https://images.pexels.com/photos/17102321/pexels-photo-17102321/free-photo-of-sunny-vacation-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
      

    ]

	return (



		<div className="w-full mb-4">
			<div className="w-full  container flex gap-2 overflow-hidden">
				<div className="relative h-[200px] w-[140px] rounded-lg overflow-hidden">
					<img src={user} alt="" className="w-full h-full" />
					<div className="absolute bottom-8 rounded-full left-1 bg-blue-500 h-7 w-7 pl-[7px] ">
						<span className="text-xl">+</span>
					</div>
					<span className="absolute left-1 bottom-1 text-white">John Doe</span>
				</div>
                

                {
                    stories.map((story)=>(
                        
                        <div className="relative h-[200px] w-[140px] rounded-lg overflow-hidden shadow-lg">
                            <img src={story.img} alt="" className="w-full h-full" />
                            <span className="absolute left-1 bottom-1 text-white">{story.name}</span>
                        </div>
                    ))
                }

				
			</div>
		</div>
	);
};

export default Stories;
