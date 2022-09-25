const FooterList = (props) => {
    return (
        <>
            <ul>
                <li className="font-bold">{props.title}</li>
                {props.listItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </>
    );
};

export default FooterList;
