//-----------------------------------------------------------------
//COMPONENT
function Col({ children, colProperties }) {
    return <div className={"col" + colProperties}>{children}</div>;
}

export default Col;
