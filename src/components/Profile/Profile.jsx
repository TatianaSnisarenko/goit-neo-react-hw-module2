import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css["profile-card"]}>
      <div className={css.profile}>
        <img src={image} alt={`${name} avatar`} />
        <p className={css.name}>{name}</p>
        <p className={css.details}>{`@${tag}`}</p>
        <p className={css.details}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
