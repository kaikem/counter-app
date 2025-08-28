import "./CounterBtn.css";

//-----------------------------------------------------------------
//COMPONENT
function CounterBtn({ children, btnBg, handleClick }) {
    return (
        <button className={"counter-btn rounded-circle btn btn-" + btnBg} onClick={handleClick}>
            {children}
        </button>
    );
}

export default CounterBtn;
