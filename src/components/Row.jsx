//-----------------------------------------------------------------
//COMPONENT
function Row({ children, rowProperties }) {
    return <div className={"row" + rowProperties}>{children}</div>;
}

export default Row;
