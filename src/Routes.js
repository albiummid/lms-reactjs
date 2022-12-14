import Assignments from './pages/assignments'
import AssignmentDetails from './pages/assignments/details/AssignmentDetails'
import BugsPage from './pages/bugs'
import BugReportsPage from './pages/bugs/reports'
import CommunityPage from './pages/community'
import LeaderBoard from './pages/course/leaderboard/leaderboard'
import ArniamView from './pages/course/view/ArniamView'
import CourseView from './pages/course/view/CourseView'
import RegularView from './pages/course/view/RegularView'
import ExamPage from './pages/exams'
import ExamDetailsPage from './pages/exams/[examId]'
import Home from './pages/home/Home'
import Index from './pages/Index'
import NoticePage from './pages/notice/NoticePage'
import NotificationPage from './pages/notification/NotificationPage'
import UserProfile from './pages/profile/UserProfile'
import SupportPage from './pages/support/SupportPage'
import TicketThreadsPage from './pages/support/tickets/TicketThreadsPage'

export const AppRoutes = [
  {
    id: 1,
    route: '/',
    page: <Home />,
    subRoutes: [
      {
        path: 'index',
        page: <Index />,
      },
    ],
  },
  {
    id: 2,
    route: '/assignments',
    page: <Assignments />,
    subRoutes: [
      {
        path: 'details/:assignmentId',
        page: <AssignmentDetails />,
      },
    ],
  },
  {
    id: 3,
    route: '/bugs',
    page: <BugsPage />,
    subRoutes: [
      {
        path: 'reports',
        page: <BugReportsPage />,
      },
    ],
  },
  { id: 4, route: '/community', page: <CommunityPage />, subRoutes: [] },
  {
    id: 5,
    route: '/exams',
    page: <ExamPage />,
    subRoutes: [
      {
        path: ':examId',
        page: <ExamDetailsPage />,
      },
    ],
  },
  {
    id: 6,
    route: '/profile',
    page: <UserProfile />,
    subRoutes: [],
  },
  {
    id: 7,
    route: '/support',
    page: <SupportPage />,
    subRoutes: [
      {
        path: ':tickets/:ticketId',
        page: <TicketThreadsPage />,
      },
    ],
  },
  {
    id: 7,
    route: '/course/:courseId',
    page: <CourseView />,
    subRoutes: [
      {
        path: 'view/arniam',
        page: <ArniamView />,
      },
      {
        path: 'view/regular',
        page: <RegularView />,
      },
      {
        path: 'leader_board',
        page: <LeaderBoard />,
      },
    ],
  },
  {
    id: 8,
    route: '/notification',
    page: <NotificationPage />,
    subRoutes: [],
  },
  {
    id: 9,
    route: '/notice-board',
    page: <NoticePage />,
    subRoutes: [],
  },
]
