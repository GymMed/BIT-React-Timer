export default function TimeShow({ showString }) {
    return (
        <div className={!showString ? `opacity-0 invisible` : ``}>
            <h1 className="text-white bg-black bg-opacity-30 p-4 rounded font-bold text-2xl">
                <div>{showString}</div>
            </h1>
        </div>
    );
}
