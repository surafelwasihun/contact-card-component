export default function Contact(props) {
  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      props.onCopy?.(value);
    } catch {
      props.onCopy?.("");
    }
  };

  return (
    <article className="contact-card">
      <img className="contact-photo" src={props.profile_picture} alt={props.name} width="150" />

      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>

      <div className="contact-actions">
        <button type="button" onClick={() => handleCopy(props.email)}>
          Copy Email
        </button>
        <button type="button" onClick={() => handleCopy(props.phone)}>
          Copy Phone
        </button>
      </div>
    </article>
  );
}
