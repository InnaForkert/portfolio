export function Project({
  project: { name, description, tech, link, git, ready },
}) {
  if (!ready) {
    return null;
  }
  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{tech}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Visit Page
      </a>
      <a href={git} target="_blank" rel="noreferrer">
        See GitHub
      </a>
    </>
  );
}
