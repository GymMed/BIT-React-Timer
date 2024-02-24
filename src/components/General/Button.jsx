export default function Button({ text, startCallback }) {
    return (
        <button
            type="button"
            onClick={() => {
                startCallback();
            }}
            className="text-white bg-gradient-to-br from-emerald-400 to-emerald-600 py-2 px-6 rounded-md font-bold hover:from-emerald-600 hover:to-emerald-800 focus:ring focus:ring-offset-2 focus:ring-emerald-600"
        >
            {text}
        </button>
    );
}
