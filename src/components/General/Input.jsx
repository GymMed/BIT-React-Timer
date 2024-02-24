export default function Input({ type, name, value, setCallback }) {
    return (
        <input
            className="p-2 bg-neutral-900 border-none rounded-md text-white"
            name={name}
            type={type}
            value={value}
            onChange={(e) => {
                setCallback(new Date(e.target.value));
            }}
        />
    );
}
