import "./CommentsForm.css";
// import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username can't be empty";
  }

  if (!values.remarks) {
    errors.remarks = "Remarks Required";
  }

  if (!values.ratings) {
    errors.ratings = "Required";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     ratings: "",
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      ratings: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm(); // optional: clears the form after submission
    },
  });

  //   let handleInputChange = (event) => {
  //     setFormData((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let handleSubmit = (event) => {
  //     console.log(formData);
  //     addNewComment(formData);
  //     event.preventDefault();
  //     setFormData({
  //       username: "",
  //       remarks: "",
  //       ratings: "",
  //     });
  //   };

  return (
    <div className="comments-form-container">
      <h2 className="form-title">Leave a Comment</h2>
      <form action="" onSubmit={formik.handleSubmit} className="comments-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
            <p style={{ color: "red" }}>{formik.errors.username}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="remarks" className="form-label">
            Comment
          </label>
          <textarea
            name="remarks"
            id="remarks"
            placeholder="Share your thoughts..."
            maxLength={500}
            value={formik.values.remarks}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.remarks ? (
            <p style={{ color: "red" }}>{formik.errors.remarks}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="ratings" className="form-label">
            Rating
          </label>
          <input
            name="ratings"
            id="ratings"
            type="number"
            placeholder="Rating ( 1 - 5 )"
            min={1}
            max={5}
            value={formik.values.ratings}
            onChange={formik.handleChange}
          />
          {formik.errors.ratings ? (
            <p style={{ color: "red" }}>{formik.errors.ratings}</p>
          ) : null}
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
