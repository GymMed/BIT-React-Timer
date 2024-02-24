import PickDateTime from "./components/PickDateTime.jsx";
import TimeShow from "./components/TimeShow.jsx";
import { useState, useEffect } from "react";
import {
    combineDateWithTimeWithSeconds,
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
            if (runningDate.getTime() > new Date().getTime()) {
                if (!isRunning) setIsRunning(true);

                setCountResult(formattingDate(runningDate));
            } else {
                clearInterval(intervalId);
                // Handle countdown completion
                if (!isRunning) return setCountResult("");

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
        <div className="from-blue-500 to-blue-700 bg-gradient-to-br container min-w-full w-screen h-screen px-5 flex items-center justify-center flex-col gap-10">
            <PickDateTime
                time={time}
                setTime={setTime}
                date={date}
                setDate={setDate}
                startCallback={() => {
                    //getSeconds + 1 cuz of interval delay
                    setRunningDate(
                        new Date(
                            combineDateWithTimeWithSeconds(
                                date,
                                time,
                                new Date().getSeconds() + 1
                            )
                        )
                    );
                }}
            />
            <TimeShow showString={countResult} />
        </div>
    );
}

export default App;
