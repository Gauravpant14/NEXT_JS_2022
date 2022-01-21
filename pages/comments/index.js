import { useEffect, useState } from "react";

function CommentPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [modalopen, setModalOpen] = useState(false);
  const fetchComments = async () => {
    if (comments.length == 0) {
      const response = await fetch("/api/comments");
      const result = await response.json();
      setComments(result);
    } else {
      setComments([]);
    }
  };

  const submitComment = async () => {
    if (!comment) {
      alert("Please enter something");
    } else {
      const response = await fetch("/api/comments", {
        method: "Post",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      alert("Posted Succesfully");
      fetchComments();
      setComment('')
      setModalOpen(false);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="container">
      <div className="box has-text-centered">
        {comments.length == 0 && (
          <h1>No Data found, Press button for load data</h1>
        )}
        <div className="row ">
          {comments.map((e) => {
            return (
              <div key={e.id} className="rows box">
                <h2 className="subtitle">{e.text}</h2>
              </div>
            );
          })}
        </div>
        <button
          onClick={fetchComments}
          className="button is-link is-outlined mt-4"
        >
          {comments.length == 0 ? "Load Comments" : "Reset"}
        </button>
        <button
          class="button is-danger is-outlined mt-4 ml-2"
          onClick={openModal}
        >
          Post Comments
        </button>
        <div className={`modal ${modalopen ? "is-active" : ""}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button
                class="delete"
                aria-label="close"
                onClick={() => setModalOpen(false)}
              ></button>
            </header>
            <section class="modal-card-body">
              <p>Post Your Thoughts</p>
              <div class="control">
                <input
                  class="input is-hovered"
                  type="text"
                  placeholder="Hovered input"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" onClick={submitComment}>
                Save changes
              </button>
              <button class="button" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentPage;
