import { Routes, Route } from 'react-router-dom';
import { BookingPage, BookingConfirmedPage, HomePage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/book" element={ <BookingPage /> } />
        <Route path="/book/confirmed" element={ <BookingConfirmedPage /> } />
      </Routes>
    </>
  );
}

export default App;
