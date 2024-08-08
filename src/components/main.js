function Main(){
    return(<div className="w-full items-center justify-center p-6">
        <div class="grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
            <div class="col-span-5 row-span-10 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Weather cast
            </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                tue
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                wed
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Thurs
                </div>
                <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Fri
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Sat
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Sun
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                humidity
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Visibility
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Air quality
                </div>
        </div>

    </div>);
}

export default Main