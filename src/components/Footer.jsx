import FooterList from "./FooterList";

const Footer = () => {
    const services = [
        "Digital Marketing Services",
        "SEO Services",
        "PPC Services",
        "Web Design Services",
        "Social Media Services",
        "Digital Advertising Services",
        "Content Marketing Servicesk",
    ];
    const knowledgeBase = [
        "Digital Marketing",
        "Content Marketing",
        "Social Media",
        "Web Design",
        "SEO",
        "PPC",
        "Amazon",
    ];
    const resources = [
        "About Us",
        "Contact Us",
        "Carrers",
        "Pishing scam alert",
        "Locations",
        "Community Impact",
        "Toolsl",
    ];
    return (
        <div className="h-[920px] min-w-full bg-black text-white sticky top-[100vh]">
            <div className="flex  justify-evenly">
                <FooterList title={"Services"} listItems={services} />
                <FooterList
                    title={"Knowledge Base"}
                    listItems={knowledgeBase}
                />
                <FooterList title={"Company"} listItems={services} />
                <FooterList title={"Resources"} listItems={resources} />
                <div className="flex flex-col">
                    <span>REVENUE DRIVEN FOR CLIENTS</span>
                    <h1 className="text-4xl">$3,021,182,299</h1>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Footer;
