import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Education from "./pages/education/Education";
import EducationPage from "./pages/educationPage/EducationPage";
import Main from "./pages/main/Main";
import News from "./pages/news/News";
import Schedule from "./pages/schedule/Schedule";
import { ABOUT_ROUTE, CONTACTS_ROUTE, EDUCATIONAL_ROUTE, MAIN_ROUTE, NEWS_ROUTE, SCHEDULE_ROUTE } from "./utils/consts";

// export const adminRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     Component: <Admin />,
//   },

// ];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />
    },
    {
        path: ABOUT_ROUTE,
        Component: <About />
    },
    {
        path: SCHEDULE_ROUTE,
        Component: <Schedule />
    },
    {
        path: EDUCATIONAL_ROUTE,
        Component: <Education />
    },
    {
        path: EDUCATIONAL_ROUTE + '/:id',
        Component: <EducationPage />
    },
    {
        path: NEWS_ROUTE,
        Component: <News />
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts />
    }
]