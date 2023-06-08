import Girl from "../assets/girlprofile.jpg";
import Man from "../assets/manprofile.jpg";
import Boy from "../assets/boyprofile1.jpg";



export const Testimonials = () => {
    return (
        <div className="grid md:grid-cols-3 rounded-md bg-[#FF6000] py-7 mb-11 md:h-[300px] lg:mx-[200px] mx-20 ">
            <div className="px-2 mx-7 md:my-auto rounded-md my-2 relative md:right-20 transform hover:scale-110 transition-all duration-300 ease-in-out shadow-2xl bg-white py-10 ">
                <img src={Girl} alt="girl"  className="w-[15%] rounded-full  " />
                <h1 className="font-bold text-xl text-gray-950 ">Mila Ward</h1>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis?</p>
            </div>
            <div className="px-2 mx-7 md:my-auto rounded-md my-2 transform hover:scale-110 transition-all duration-300 ease-in-out shadow-2xl bg-white py-10 ">

            <img src={Man} alt="man"  className="w-[15%] rounded-full  "/>
            <h1 className="font-bold text-xl text-gray-950 ">Andrew Banks</h1>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis?</p>

            </div>
            <div className=" bg-white px-2 rounded-md my-2 transform hover:scale-110 relative md:left-20 transition-all duration-300 ease-in-out shadow-2xl mx-7 md:my-auto py-10 ">
            <img src={Boy} alt="boy" className="w-[15%] rounded-full  " />
             <h1 className="font-bold  text-xl text-gray-950 ">Anes Dekkar</h1>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis?</p>

            </div>
           
          


        </div>
    )
}