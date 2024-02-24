import Input from "./Input";

export default function InputField({
    labelText,
    type,
    name,
    value,
    setCallback,
}) {
    return (
        <div>
            <label className="text-white mx-2" htmlFor={name}>
                {labelText}
            </label>
            <Input
                type={type}
                name={name}
                value={value}
                setCallback={setCallback}
            />
        </div>
    );
}
