const Error = ({ children }) => {
    return (
        <div className="text-center bg-red-800 p-3 text-white uppercase rounded-md font-bold mb-3">
            <p>{children}</p>
        </div>
    );
};

export default Error;
