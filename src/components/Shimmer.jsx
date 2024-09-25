const Shimmer=()=>{
    const divArray = new Array(10).fill(null);
    return(
        <>
            <div className="gap-2 flex flex-wrap justify-center items-center mt-4">
                {
                    divArray.map(()=><div className="rounded-xl border-4 bg-gray-300 shadow-xl rounded-md border-4 w-[280px] h-[400px]"></div>)
                }
            </div>
        </>
    )
}

export default Shimmer;