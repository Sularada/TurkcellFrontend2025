import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        toast.success("Başarıyla giriş yaptınız! 🎉");

        if (userData.isAdmin) {
          navigate("/applications");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Kullanıcı bilgileri bulunamadı.");
      }
    } catch (error) {
      toast.error(`Giriş yapılamadı: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          autocomplete="current-password"
        />

        <button type="submit" className="btn btn-primary w-100">
          Giriş Yap
        </button>
      </form>
      <p className="mt-3">
        Hesabın yok mu? <a href="/register">Kayıt ol</a>
      </p>
    </div>
  );
};

export default Login;
