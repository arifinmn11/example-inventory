import { UnitForm, UnitList, Error } from "../pages"

const routes = [
    {
        path: '/units',
        component: <UnitList />,
        exact: true
    },
    {
        path: '/unit',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '/unit/:id/edit',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '*',
        component: <Error></Error>,
        exact: false
    }
];

export default routes
