const Navbar = () => {
    return (
        <div className=" text-md h-14 flex flex-row w-full justify-between items-center	my-4">
            <div className="basis-[10%] mx-2 text-center">
                <h1 className="font-bold">MUSCLED</h1>
            </div>
            <div className=" basis-[75%] w-full flex flex-row justify-around mx-2">
                <h1 className="text-red-600">SEO & Lead Generation</h1>
                <h1>Ecommerce</h1>
                <h1>UX & Interactive</h1>
                <h1>Our Technology</h1>
                <h1>Who We Are?</h1>
            </div>
            <div className="basis-[15%]">
                <h1 className="font-bold w-60 bg-black text-white rounded-3xl p-2 mx-4 whitespace-nowrap text-center">
                    Get Free Proposal
                </h1>
            </div>
        </div>
    );
};

export default Navbar;
