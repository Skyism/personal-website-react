import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
