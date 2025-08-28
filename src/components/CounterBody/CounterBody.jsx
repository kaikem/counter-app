import "./CounterBody.css";

//-----------------------------------------------------------------
//COMPONENT
function CounterBody({ children, title }) {
    return (
        <div id="counterBody" className="counter-body rounded-3 text-center bg-body-tertiary p-4">
            <h2 className="display-3 m-0">{title}</h2>
            {children}
        </div>
    );
}

export default CounterBody;
