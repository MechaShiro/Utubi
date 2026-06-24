import { useEffect, useState } from "react";

import "../../../css/header.css";

import RegistrationMenu from "../../RegistrationMenu";
import Login from "../../Login";
import SignUp from "../../SignUp";
import SideMenu from "../../SideMenu";

import noUser from "../../../imgs/profilepics/user_icon.svg";

const USERS_API_URL = "/api/users"

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
	const [loginMessage, setLoginMessage] = useState("");

	const loginState = () => {
		setLogin(false);
		setSignUp(false);
		setToggle(false);
		setLoginMessage("")
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
		const response = await fetch(USERS_API_URL)
		if(!response.ok){
			throw new Error(`Falha ao obter utilizadores : ${response.status}`)
		}
		return response.json()
	};

	const loginBehaviour = async (username, password) => {
		setLoginMessage("")
		try {
			const database = await getDatabase()
			const user = database.find((item) =>{item.username === username && item.password === password})
			if(!user){
				setLoginMessage("Username incorrecto")
				returns
			}
			setUsername("")
			setPassword("")
			loginState()
		} catch (error) {
			console.error(error)
			setLoginMessage("Erro BackEnd")
		}
	};

	const signupBehaviour = async(username ,password) => {
		const database = await getDatabase();

		const user = database.find((u) => u.username === username);

		if(user){
			alert("User ja existe wii")
			return 
		}
		alert("Nao esta registado wii")
	}

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
						loginMessage={loginMessage}
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
