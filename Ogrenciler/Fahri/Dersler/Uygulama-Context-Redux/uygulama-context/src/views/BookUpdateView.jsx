import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeBook } from "../redux/slices/bookSlice";
import { useNavigate, useParams } from "react-router";
import { getBook, updateBook } from "../../firebase/dbController";

const BookUpdateView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicYear, setPublicYear] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [publisherId, setPublisherId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBookDetails = async () => {
      const data = await getBook(id);
      setTitle(data.title);
      setAuthor(data.author);
      setGenre(data.genre);
      setPublicYear(data.publicYear);
      setDescription(data.description);
      setImg(data.img);
      setPublisherId(data.publisherId);
    };
    fetchBookDetails();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id && title && author && publicYear && description) {
      const newBook = {
        title: title,
        author: author,
        genre: genre,
        img:
          img ||
          "https://static.wikia.nocookie.net/villains/images/3/35/Learning-language-without-grammar-education-online.jpg/revision/latest?cb=20180825053447",
        publicYear: publicYear || "Belirtilmemiş",
        description: description,
        publisherId: publisherId,
      };
      updateBook(id, newBook);
      dispatch(changeBook(newBook));
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicYear("");
      setDescription("");
      setImg("");
    }
  };
  if (!id)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );
  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="📖 Kitap Adı"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="✍️ Yazar"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="📚 Tür"
          />
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            value={publicYear}
            onChange={(e) => setPublicYear(e.target.value)}
            placeholder="📅 Yayın Yılı"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="📷 Kapak Görseli URL"
          />
        </div>
      </div>

      <div className="mt-2">
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="📜 Açıklama"
        ></textarea>
      </div>
      <div className="d-flex gap-3 mt-4">
        <button
          className="btn btn-secondary  w-50 "
          onClick={() => navigate(-1)}
        >
          Geri Dön
        </button>
        <button
          onClick={() => navigate(-1)}
          type="submit"
          className="btn btn-success w-50"
        >
          🔄 Güncelle
        </button>
      </div>
    </form>
  );
};

export default BookUpdateView;
