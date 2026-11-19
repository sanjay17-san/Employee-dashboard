function statCard({ title, value,color}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 font-medium">
                {title}
                </p>
            <h2 className={`text-2xl font-bold ${color}`}>
                {value}
                </h2>

        </div>

    )
}
export default statCard;
