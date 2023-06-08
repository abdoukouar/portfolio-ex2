import Soupe from "../assets/soupe.png";
import Pasta from "../assets/pasta.png";


export const Traditional = () => {
    return(
        <div className="grid md:grid-cols-2 pb-[100px]">
            <div className="flex">
                <img src={Soupe} alt="soupe" className="w-[50%]  md:flex ml-[-150px] hidden " />
                <img src={Pasta} alt="pasta" className="w-[55%] ml-2" />

            </div>
            <div className="ml-6 md:ml-0">
                <h1 className="title text-[#FF6000] text-5xl">Traditional <br /> Vegetarian Food</h1>
                <p className="text-gray-400 text-sm font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Placeat quam quae vero quis iusto! Repudiandae, <br /> mollitia eaque!</p>
                <button className="text-[#FF6000] bg-gray-950 py-2 px-3 rounded-sm mt-4">Order Trad Food</button>

            </div>

        </div>
    )
}