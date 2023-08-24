import './styles.css';

export const Header = () => {
	return (
		<header>
			<div>
				<div className="title">
					<img src="assets/ia-logo.svg" width="70px" />
					<h1>To-Do List App</h1>
				</div>
				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
