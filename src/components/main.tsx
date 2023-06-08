import Tacos from "../assets/pexels-rajesh-tp-1633525-removebg-preview.png"

export const Main =()=> {
    return(
        <div className="grid md:grid-cols-2  items-center px-7">
            <div className="items-center md:pl-[20%]">
                <h1 className="title text-[#FF6000]  text-6xl">Quality food <br />Delivred!</h1>
                <p className="text-gray-400 font-medium py-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora <br /> iste aperiam blanditiis quas dolore modi nisi ad quod <br /> veritatis aspernatur?</p>
                <button className="text-white font-bold outline outline-[#FF6000] rounded-xl py-2 px-2 my-4 hover:outline-none hover:bg-[#FF6000]">Get Started</button>
            </div>
            <div className="h-[500px] ml-20 md:ml-0">
                <img src={Tacos} alt="Tacos" className="h-full " />

            </div>

        </div>
    )
}