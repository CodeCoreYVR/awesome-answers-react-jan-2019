import React from "react";
import FormErrors from "./FormErrors";

function NewQuestionForm(props) {
  const { errors = [] } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);

    props.onSubmit({
      title: fD.get("title"),
      body: fD.get("body")
    });
  }
  return (
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <FormErrors forField="title" errors={errors} />
        <input name="title" id="title" />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <FormErrors forField="body" errors={errors} />
        <textarea name="body" id="body" />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default NewQuestionForm;
