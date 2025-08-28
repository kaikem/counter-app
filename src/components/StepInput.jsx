function StepInput({ type, stepValue, onStepChange }) {
    return <input type={type} name="step" id="stepInput" className="text-center mx-2 fs-3 w-25" value={stepValue} onChange={onStepChange} />;
}

export default StepInput;
