import HeroImage from "../../../assets/italy.jpg";
export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  );
}
