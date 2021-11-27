const KananForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="message">Mesaj</label>
      <input type="text" id="message"></input>
      <button type="submit">Təsdiq</button>
    </form>
  );
};

export default KananForm;
