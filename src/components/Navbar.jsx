const Navbar = () => {
    return (
        <div className=" text-md h-14 flex flex-row w-full justify-between items-center	my-4">
            <div className="basis-[10%] mx-2 text-center">
                <h1 className="font-bold">MUSCLED</h1>
            </div>
            <div className=" basis-[75%] w-full flex flex-row justify-around mx-2">
                <button className="text-red-600">SEO & Lead Generation</button>
                <button>Ecommerce</button>
                <button>UX & Interactive</button>
                <button>Our Technology</button>
                <button>Who We Are?</button>
            </div>
            <div className="basis-[15%]">
                <button className="font-bold w-60 bg-black text-white rounded-3xl p-2 mx-4 whitespace-nowrap text-center">
                    Get Free Proposal
                </button>
            </div>
        </div>
    );
};

export default Navbar;
