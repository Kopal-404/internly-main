function App() {
  return (
    <div className="home-container1 app-container">
      <Navbar />

      <div className="main-content">
        <UserCard name="Priya Sharma" role="Web Developer" />
        <UserCard name="Rahul Kumar" role="ML Engineer" />
        <UserCard name="Ananya Singh" role="UI/UX Designer" />
      </div>

      <Footer />
    </div>
  );
}
