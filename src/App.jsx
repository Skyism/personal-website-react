import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {isHomePage && <Sidebar />}
        <Box
          component="div"
          sx={{
            flex: 1,
            padding: { xs: '16px', md: '32px' },
            overflowY: 'auto',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
