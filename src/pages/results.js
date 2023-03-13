import { useLocation } from "react-router-dom";

const Results = () => {
    const location = useLocation();
    const answers = location.state?.answers;
    return (
        <div></div>
    );
};

export default Results;