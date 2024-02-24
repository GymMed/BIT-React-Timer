import dateFormat from "dateformat";
import InputField from "./General/InputField";
import Button from "./General/Button";

export default function PickDateTime({
    date,
    setDate,
    setTime,
    time,
    startCallback,
}) {
    return (
        <div className="flex gap-5 items-center">
            <div>
                <InputField
                    labelText="Date"
                    type="date"
                    name="date"
                    value={dateFormat(date, "yyyy-mm-dd")}
                    setCallback={setDate}
                />
            </div>
            <div>
                <label className="text-white mx-2" htmlFor="time">
                    Time
                </label>
                <input
                    className="p-2 bg-neutral-900 border-none rounded-md text-white"
                    name="time"
                    type="time"
                    value={time}
                    min="00:00"
                    max="23:59"
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}
                />
            </div>
            <Button text="Start" startCallback={startCallback} />
        </div>
    );
}
