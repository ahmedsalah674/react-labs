import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        <div className="form-group">
          <label for="exampleInputEmail1"><h1>Title</h1></label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1"><h1>Content</h1></label>
          <input
            type="text"
            name="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
            Add Todo
        </button>

      </form>
    </div>
  );
};

export default TodoForm;