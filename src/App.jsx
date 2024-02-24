import PickDateTime from "./components/PickDateTime.jsx";
import TimeShow from "./components/TimeShow.jsx";
import { useState, useEffect } from "react";
import {
    combineDateWithTime,
    formattingDate,
} from "./utils/dateCalculator.jsx";

function App() {
    const currentDate = new Date();
    const [time, setTime] = useState(
        `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}`
    );
    const [date, setDate] = useState(currentDate);

    const [runningDate, setRunningDate] = useState(new Date());
    const [isRunning, setIsRunning] = useState(false);
    const [countResult, setCountResult] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isRunning) setIsRunning(true);

            let runningDateTimestamp = runningDate.getTime();
            if (runningDateTimestamp > new Date().getTime()) {
                setCountResult(formattingDate(runningDate));
            } else {
                clearInterval(intervalId);
                // Handle countdown completion
                if (!isRunning) return;

                setIsRunning(false);
                setCountResult("Completed!");
            }
        }, 1000);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [runningDate]);

    return (
        <div className="from-blue-500 to-blue-700 bg-gradient-to-br container h-screen px-5 flex items-center justify-center flex-col gap-10">
            <PickDateTime
                time={time}
                setTime={setTime}
                date={date}
                setDate={setDate}
                startCallback={() => {
                    setRunningDate(new Date(combineDateWithTime(date, time)));
                }}
            />
            <TimeShow showString={countResult} />
        </div>
    );
}

export default App;
