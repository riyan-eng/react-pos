import {
    createBrowserRouter,
} from "react-router-dom";
import DashboardPages from "../pages/dashboard/DashboardPages";
import CommonLayoutComponent from "../components/layouts/CommonLayoutComponent";
import UnitPages from "../pages/unit/UnitPages";
import UnitDetailPages from "../pages/unit/UnitDetailPages";
import ItemPages from "../pages/item/ItemPages";
import OrderPages from "../pages/order/OrderPages";
import HistoryPages from "../pages/history/HistoryPages";
import SummaryDataPages from "../pages/summary_data/SummaryDataPages";
import SummaryChartPages from "../pages/summary_chart/SummaryChartPages";
import ConfigPages from "../pages/config/ConfigPages";
import CreateItemPages from "../pages/item/CreateItemPages";
import CreateOrderPages from "../pages/order/CreateOrderPages";
import DetailOrderPages from "../pages/order/DetailOrderPages";
import UpdateOrderPages from "../pages/order/UpdateOrderPages";
import DetailItemPages from "../pages/item/DetailItemPages";
import UpdateItemPages from "../pages/item/UpdateItemPages";
import DetailHistoryPages from "../pages/history/DetailHistoryPages";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <div>ini index</div>
            },
            {
                path: "/about",
                element: <div>ini about</div>
            }
        ]
    },
    {
        path: "/",
        element: <CommonLayoutComponent />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPages />
            },
            {
                path: "/unit",
                element: <UnitPages />,
            },
            {
                path: "/unit/:id",
                element: <UnitDetailPages />
            },
            {
                path: "/item",
                element: <ItemPages />,
            },
            {
                path: "/item/create",
                element: <CreateItemPages/>
            },
            {
                path: "/item/detail/:id",
                element: <DetailItemPages/>
            },
            {
                path: "/item/update/:id",
                element: <UpdateItemPages/>
            },
            {
                path: "/order",
                element: <OrderPages />
            },
            {
                path: "/order/create",
                element: <CreateOrderPages/>
            },
            {
                path: "/order/detail/:id",
                element: <DetailOrderPages/>
            },
            {
                path: "/order/update/:id",
                element: <UpdateOrderPages/>
            },
            {
                path: "/history",
                element: <HistoryPages/>
            },
            {
                path: "/history/detail/:id",
                element: <DetailHistoryPages/>
            },
            {
                path: "/summary-data",
                element: <SummaryDataPages/>
            },
            {
                path: "/summary-chart",
                element: <SummaryChartPages/>
            },
            {
                path: "/config",
                element: <ConfigPages/>
            },
        ]
    },
]);

export default router;