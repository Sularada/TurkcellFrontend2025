import { login, signup } from "./action";

export default function LoginPage() {
	return (
		<main className="d-flex justify-content-center align-items-center p-3">
			<section
				className="card shadow p-4 p-md-5"
				style={{ maxWidth: "450px", width: "100%" }}>
				<h2 className="text-center mb-4">Welcome to NextBlog</h2>

				<form className="d-flex flex-column gap-3">
					<div>
						<label htmlFor="email" className="form-label">
							Email:
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className="form-control"
							required
						/>
					</div>

					<div>
						<label htmlFor="password" className="form-label">
							Password:
						</label>
						<input
							id="password"
							name="password"
							type="password"
							className="form-control"
							required
						/>
					</div>

					<div className="d-grid gap-2 mt-2">
						<button formAction={login} className="btn btn-primary btn-lg">
							Log in
						</button>
						<button
							formAction={signup}
							className="btn btn-outline-secondary btn-lg">
							Sign up
						</button>
					</div>
				</form>
			</section>
		</main>
	);
}
