/* ProjectCard — one project tile.
   Renders only the fields that exist; missing links become a disabled
   "Coming soon" button so the card layout stays consistent. */

function ActionButton({ href, label, primary }) {
  const disabled = !href;
  const className = [
    'btn',
    primary && !disabled ? 'btn--primary' : '',
    disabled ? 'btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {label} · soon
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  const {
    title,
    semester,
    team,
    abstract,
    tags,
    partner,
    tools,
    presentationUrl,
    repositoryUrl,
    materialsUrl,
  } = project;

  return (
    <article className="card">
      <div className="card__top">
        <span className="card__semester">{semester}</span>
        {partner && <span className="card__partner">{partner}</span>}
      </div>

      <h3 className="card__title">{title}</h3>

      <p className="card__team">
        <strong>Team:</strong> {team.join(', ')}
      </p>

      <p className="card__abstract">{abstract}</p>

      {tags && tags.length > 0 && (
        <div className="card__tags">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}

      {tools && tools.length > 0 && (
        <p className="card__tools">
          <span>Built with </span>
          {tools.join(' · ')}
        </p>
      )}

      <div className="card__actions">
        <ActionButton href={presentationUrl} label="Presentation" primary />
        <ActionButton href={repositoryUrl} label="Repository" />
        <ActionButton href={materialsUrl} label="Materials" />
      </div>
    </article>
  );
}

window.ProjectCard = ProjectCard;
