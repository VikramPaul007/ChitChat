import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../images/logo.png";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }

    // Redirect to /chat
    navigate("/chat", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img
          src={Logo}
          alt="chit chat"
          style={{ width: "100%", borderRadius: "6px" }}
        />
        <input
          className={styles.input}
          placeholder="Choose your avatar"
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
