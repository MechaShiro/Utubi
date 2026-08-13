import { useEffect, useState } from "react";
import "../../../css/header.css";
import RegistrationMenu from "../../RegistrationMenu";
import Login from "../../Login";
import SignUp from "../../SignUp";
import SideMenu from "../../SideMenu";
import noUser from "../../../imgs/profilepics/user_icon.svg";
import visibilityOn from "../../../imgs/icons/visibility_icon.svg";
import visibilityOff from "../../../imgs/icons/visibility_off_icon.svg";

import profile1 from "../../../imgs/profilepics/profile1.jpg"
import profile2 from "../../../imgs/profilepics/profile2.jpg"
import profile3 from "../../../imgs/profilepics/profile3.jpg"
import profile4 from "../../../imgs/profilepics/profile4.png"
import profile5 from "../../../imgs/profilepics/profile5.jpg"
import profile6 from "../../../imgs/profilepics/profile6.jpg"

function Header({ 	handleSideMenu, 
					setFullWidth ,
					search,
					searchVideos ,
					handleSearchValue}) {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => setToggle(!toggle);

	const handleGoBack = () => {
		setLogin(false);
		setSignUp(false);
		handleToggle();
		setUsername("");
		setPassword("")
	};

	const [showPassword , setShowPassword] = useState(false)
	

	//Login and SignUp
	const [showLogin, setLogin] = useState(false);
	const [showAdminLogin, setAdminLogin] = useState(false);
	const [showSignUp, setSignUp] = useState(false);
	const [loginMessage, setLoginMessage] = useState("");

	const closeRgtMenus = () => {
		setLogin(false);
		setSignUp(false);
		setToggle(false);
		setLoginMessage("");
	};
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState(noUser);

	const profilePictures =[profile1 , profile2 , profile3 , profile4 , profile5 , profile6];
	const randomProfilePicture = profilePictures[Math.floor(Math.random() * profilePictures.length)];

	// ler base de dados

	const USERS_API_URL = "/api/users";

	const getDatabase = async () => {
		const response = await fetch(USERS_API_URL);
		
		if (!response.ok) {
			throw new Error(`Falha ao obter utilizadores : ${response.status}`);
		}
		return await response.json();
	};

	//login
	const loginBehaviour = async (username, password, image) => {
		setLoginMessage("");
		try {
			const database = await getDatabase();
			console.log(database);
			console.log(USERS_API_URL)
			console.log(database[0]);
			const user = database.find((item) => item.username === username && item.password === password && item.image === image);
			if (!user) {
				setLoginMessage("Username incorrecto");
				console.log(loginBehaviour)
				console.log(username , password)
				return;
			}
			setImage(user.image ? `/profilepics/${String(user.image).trim()}` : noUser);
			setUsername("");
			setPassword("");
			closeRgtMenus();
			console.log("bem vindo admin")
		} catch (error) {
			console.error(error);
			setLoginMessage("Erro BackEnd");
		}
	};

	//registo
	const signupBehaviour = async(username, password) => {
		const response = await fetch("http://localhost:3001/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username,
				password
			})

		
		})

		const data = await response.json()
		console.log(data)

		if (response.ok) {
			setImage(randomProfilePicture)
    		closeRgtMenus(); // Fecha o SignUp
    } else {
        setLoginMessage(data.message);
    }
	}
	
	return (
		<>
			<div>
				<header>
					<div className="subDiv">
						<button
							className="btn_menu"
							onClick={handleSideMenu}>
							
							<img
								src="./src/imgs/icons/menu_icon.svg"
								alt="Menu"></img>
						</button>
						<h1>Utubi</h1>
					</div>

					<form>
						<input
							onChange = {handleSearchValue}
							type="search"
							id="x"></input>
						<button
							type="submit"
							className="btn_search"
							onClick = {(e)=> {	e.preventDefault();
												searchVideos(search)}}>
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
						closeRgtMenus ={closeRgtMenus}
					/>
				)}

				{showLogin && (
					<Login
						setLogin={setLogin}
						showLogin={showLogin}
						setAdminLogin={setAdminLogin}
						handleGoBack={handleGoBack}
						closeRgtMenus={closeRgtMenus}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						getDatabase={getDatabase}
						loginBehaviour={loginBehaviour}
						loginMessage={loginMessage}
						showPassword={showPassword}
						setShowPassword = {setShowPassword}
						visibilityOn = {visibilityOn}
						visibilityOff = {visibilityOff}
						
					/>
				)}

				{showSignUp && (
					<SignUp
						handleGoBack={handleGoBack}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						signupBehaviour = {signupBehaviour}
						closeRgtMenus = {closeRgtMenus}
						showPassword={showPassword}
						setShowPassword = {setShowPassword}
						visibilityOn = {visibilityOn}
						visibilityOff = {visibilityOff}
					/>
				)}

				
			</div>
		</>
	);
}

export default Header;
