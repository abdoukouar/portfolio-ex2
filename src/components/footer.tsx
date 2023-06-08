import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";



export const Footer = () => {
    return (

        <div id="footer" className=" grid px-[10%] bg-gray-950 mt-11 py-11 md:grid-cols-5">
            <div className="col-span-2 text-left  ">
                <h1 className="text-[#FF6000] title logo  text-2xl">FoodKa</h1>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque quis assumenda voluptatum dolorem.</p>
                <AiFillInstagram className="inline-block md:mx-1 mr-9 text-[#FF6000] " />
                < AiFillTwitterCircle className="text-[#FF6000] md:mx-1 mx-8 inline-block" />
                <AiFillLinkedin className="text-[#FF6000] md:mx-1 mx-9 inline-block" />
                < AiFillFacebook className="text-[#FF6000] md:mx-1  mx-8 inline-block " />
                <AiFillYoutube className="text-[#FF6000] md:mx-1  mx-8 inline-block " />
            </div>
            <div className="col-span-1 py-4">
                <h1 className="text-[#FF6000] font-bold">Naviguation</h1>
                <p className="text-sm text-gray-500">home</p>
                <p className="text-sm text-gray-500">about</p>
                <p className="text-sm text-gray-500">catalog</p>
                <p className="text-sm text-gray-500">contact</p>
                <p className="text-sm text-gray-500">footer</p>

            </div>
            <div className="col-span-1 py-4">
                <h1 className="text-[#FF6000] font-bold">More Links</h1>
                <p className="text-sm text-gray-500">Gallery</p>
                <p className="text-sm text-gray-500">inside Ourshop</p>
                <p className="text-sm text-gray-500">Pricing</p>
                <p className="text-sm text-gray-500">Behind the scenes</p>
              

            </div>
            <div className="col-span-1 py-4 ">
                <h1 className="text-[#FF6000] font-bold ">Subscribe to our newsletter</h1>
                <input type="text" className="w-[180px] py-1 rounded-sm " placeholder="Email..." />
                <button className="bg-[#FF6000] rounded-md px-2 mt-2 text-white ">Submit</button>
              

            </div>






        </div>
    )
}