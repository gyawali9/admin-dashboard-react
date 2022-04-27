// sidebar icons import
import { FiUsers } from 'react-icons/fi';
import { VscGraph } from 'react-icons/vsc';
import { VscDatabase } from 'react-icons/vsc';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { BiHomeAlt } from 'react-icons/bi';

// card import

import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { HiOutlinePrinter } from 'react-icons/hi';
import { FiDatabase } from 'react-icons/fi';

// sidebar data
export const SidebarData = [
    {
        icon: BiHomeAlt,
        heading: "Dashboard"
    },
    {
        icon: VscDatabase,
        heading: "Orders"
    },
    {
        icon: FiUsers,
        heading: "Customers"
    },
    {
        icon: MdOutlineProductionQuantityLimits,
        heading: "Products"
    },
    {
        icon: VscGraph,
        heading: "Analytics"
    }
];

// middle section data
export const cardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: RiMoneyDollarBoxLine,
        series:[
            {
                name: "Sales",
                data:[31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },
    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 8%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: HiOutlinePrinter,
        series:[
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            }
        ]
    },
    {
        title: "Expenses",
        color:{
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%,  rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #FFCBA7",
        },
        barValue: 60,
        value: "4,270",
        png: FiDatabase,
        series:[
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            }
        ]
    }

];