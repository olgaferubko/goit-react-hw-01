import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className={css.card}>
  <div className={css.userContainer}>
    <img
      src={image}
      alt="User avatar"
      className={css.profilePicture}
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.userInformation}>@{tag}</p>
    <p className={css.userInformation}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span className={css.itemElement}>Followers</span>
        <span className={clsx(css.itemElement, css.additional)}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.itemElement}>Views</span>
        <span className={clsx(css.itemElement, css.additional)}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.itemElement}>Likes</span>
        <span className={clsx(css.itemElement, css.additional)}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;
