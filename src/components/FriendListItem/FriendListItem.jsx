import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div className={css.item}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
