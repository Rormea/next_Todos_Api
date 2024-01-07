'use client'

import { setCookie } from "cookies-next";
import { useState } from "react";



// const tabOptions = [1, 2, 3, 4, 5]

interface TabOptions {
    currentTab?: number;
    tabOptions?: number[];
};



const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4, 5] }: TabOptions) => {

    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = (tab: number) => {
        setSelected(tab);
        setCookie('selectedTab', tab.toString());
    };

    return (
        <div className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>

            {
                tabOptions.map(tab => (
                    <div key={tab}>
                        <input
                            type="radio"
                            id={tab.toString()}
                            className="peer hidden"
                            checked={selected === tab}
                            onChange={() => { }}
                        />
                        <label
                            onClick={() => onTabSelected(tab)}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                            {tab}
                        </label>
                    </div>
                ))
            }


        </div>
    )
}

export default TabBar