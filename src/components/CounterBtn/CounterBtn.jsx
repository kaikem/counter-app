import "./CounterBtn.css";

//-----------------------------------------------------------------
//COMPONENT
function CounterBtn({ children, btnBg }) {
    return <button className={"counter-btn rounded-circle btn btn-" + btnBg}>{children}</button>;
}

export default CounterBtn;
