import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import CounterBody from "./components/CounterBody";
import CounterBtn from "./components/CounterBtn/CounterBtn";
import StepInput from "./components/StepInput";

function App() {
    const [counterValue, setCounterValue] = useState(5);
    const [stepValue, SetStepValue] = useState(1);

    function handleCounterBtnClick(prevCounterValue, type) {
        if (type === "increase") {
            setCounterValue((prevCounterValue) => (prevCounterValue = Number(prevCounterValue) + Number(stepValue)));
        } else if (type === "decrease") {
            setCounterValue((prevCounterValue) => (prevCounterValue = Number(prevCounterValue) - Number(stepValue)));
        }
    }

    function handleResetBtnClick() {
        setCounterValue(5);
    }

    function handleStepChange(event) {
        SetStepValue(event.target.value);
    }

    return (
        <>
            <Container>
                <Row rowProperties=" d-flex justify-content-center h-100">
                    <Col colProperties="-6 d-flex justify-content-center align-items-center">
                        <CounterBody title="Counter App">
                            <div id="counterCont" className="counter-cont d-inline-block rounded-3 text-bg-secondary px-5 py-4 my-5">
                                <span id="counterDisplay" className="counter-display display-2 fw-bold">
                                    {counterValue}
                                </span>
                            </div>

                            <div id="counterControls" className="counter-controls">
                                <div className="d-flex justify-content-center align-items-center">
                                    <CounterBtn btnBg="danger" handleClick={() => handleCounterBtnClick(counterValue, "decrease")}>
                                        <i className="fa-solid fa-circle-minus"></i>
                                    </CounterBtn>
                                    <StepInput type="number" stepValue={stepValue} onStepChange={handleStepChange} />
                                    <CounterBtn btnBg="success" handleClick={() => handleCounterBtnClick(counterValue, "increase")}>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </CounterBtn>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <button className="reset-btn rounded-4 fw-bold btn btn-warning px-5 py-2 my-3" onClick={handleResetBtnClick}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </CounterBody>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
