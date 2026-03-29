import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <UserCard name="Priya Sharma" role="Web Developer" />
      <UserCard name="Rahul Kumar" role="ML Engineer" />
      <Footer />
    </div>
  );
}

export default App;