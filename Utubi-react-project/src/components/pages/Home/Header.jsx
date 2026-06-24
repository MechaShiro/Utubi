import { useEffect, useState } from "react";

import "../../../css/header.css";

import RegistrationMenu from "../../RegistrationMenu";
import Login from "../../Login";
import SignUp from "../../SignUp";
import SideMenu from "../../SideMenu";

import noUser from "../../../imgs/profilepics/user_icon.svg";
import adminUser from "../../../imgs/profilepics/admin_profile.jpg";
import profile1 from "../../../imgs/profilepics/profile1.jpg";
import profile2 from "../../../imgs/profilepics/profile2.jpg";
import profile3 from "../../../imgs/profilepics/profile3.jpg";
import profile4 from "../../../imgs/profilepics/profile4.png";
import profile5 from "../../../imgs/profilepics/profile5.jpg";
import profile6 from "../../../imgs/profilepics/profile6.jpg";

function Header({ handleSideMenu, setFullWidth }) {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => setToggle(!toggle);

	const handleGoBack = () => {
		setLogin(false);
		setSignUp(false);
		handleToggle();
	};

	//Login and SignUp
	const [showLogin, setLogin] = useState(false);

	const [showAdminLogin, setAdminLogin] = useState(false);

	const [showSignUp, setSignUp] = useState(false);

	const profilePictures = [profile1, profile2, profile3, profile4, profile5, profile6];

	const loginState = () => {
		setLogin(false);
		setSignUp(false);
		setToggle(false);
	};

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState(noUser);

	//Creating accounts

	const profiles = JSON.parse(localStorage.getItem("profiles")) || []; //"Tenta carregar os utilizadores guardados. Se ainda não houver utilizadores guardados, começa com uma lista vazia."
	const adminProfile = profiles.some((profiles) => profiles.username === "admin");
	if (!adminProfile) {
		profiles.push({
			username: "admin",
			password: "admin",
			profilePicture: adminUser,
		});

		localStorage.setItem("profiles", JSON.stringify(profiles));
	}

	const getDatabase = async () => {
		const response = await fetch("/database/database.csv");
		const data = await response.text();

        // Aqui a unica alteração que fiz foi adicionar o trim() para remover espaços em branco no início e no fim de cada campo, caso existam.
		return data
			.split("\n")
			.slice(1)
			.map((line) => {
				const [username, password, pic] = line.split(",");
				return {
					username: (username || "").trim(),
					password: (password || "").trim(),
					pic: (pic || "").trim(),
				};
			});
	};

	const loginBehaviour = async (username, password) => {
		const database = await getDatabase();

		const user = database.find((u) => u.username === username && u.password === password);

		console.log(user ? "Login OK" : "Login falhou");

		console.log(user);

		if (user) {
            // Aqui o que alteramos foi a forma como definimos a imagem do usuário. Se o usuário tiver uma imagem de perfil definida, usamos essa imagem; caso contrário, usamos a imagem padrão noUser.
			setImage(user.pic ? `/profilepics/${user.pic}` : noUser);
		}
	};

	return (
		<>
			<div>
				<header>
					<div className="subDiv">
						<button
							className="btn_menu"
							onClick={handleSideMenu}>
							{" "}
							<img
								src="./src/imgs/icons/menu_icon.svg"
								alt="Menu"></img>
						</button>
						<h1>Utubi</h1>
					</div>

					<form>
						<input
							type="search"
							id="x"></input>
						<button
							type="submit"
							className="btn_search">
							<img
								src="./src/imgs/icons/search_icon.svg"
								alt="Search Button"></img>
						</button>
					</form>

					<div className="subDiv">
						<button className="btn_notifications">
							<img
								src="./src/imgs/icons/notifications_icon.svg"
								alt="Notifications Button"></img>
						</button>
						<button
							onClick={handleToggle}
							className="btn_user">
							<img
								className="img_user"
								src={image}
								alt="User Button"></img>
						</button>
					</div>
				</header>

				{toggle && (
					<RegistrationMenu
						handleToggle={handleToggle}
						setLogin={setLogin}
						showLogin={showLogin}
						setSignUp={setSignUp}
						showSignUp={showSignUp}
					/>
				)}

				{showLogin && (
					<Login
						handleToggle={handleToggle}
						setLogin={setLogin}
						showLogin={showLogin}
						setAdminLogin={setAdminLogin}
						handleGoBack={handleGoBack}
						loginState={loginState}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						profiles={profiles}
						adminProfile={adminProfile}
						getDatabase={getDatabase}
						loginBehaviour={loginBehaviour}
					/>
				)}

				{showSignUp && (
					<SignUp
						handleGoBack={handleGoBack}
						profilePictures={profilePictures}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
					/>
				)}
			</div>
		</>
	);
}

export default Header;
