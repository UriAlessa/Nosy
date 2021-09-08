import styles from "../../styles/users.module.css";
import { useState } from "react";

const TableData = (props) => {
  const [edit, setEdit] = useState(false);
  // eslint-disable-next-line
  const { _id, username, email, avatar, coins } = props.user;
  return (
    <tr>
      <td>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url('${avatar}')` }}
        ></div>
      </td>
      <td>{!edit ? `${username}` : <input defaultValue={username} />}</td>
      <td>{!edit ? `${email}` : <input defaultValue={email} />}</td>
      <td>{!edit ? `${coins}` : <input defaultValue={coins} />}</td>
      <td>
        <img
          className={styles.icon}
          onClick={() => setEdit(!edit)}
          src="/assets/edit.png"
          alt=""
        />
        <img
          className={styles.icon}
          onClick={() => setEdit(!edit)}
          src="/assets/delete.png"
          alt=""
        />
      </td>
    </tr>
  );
};

export default TableData;
