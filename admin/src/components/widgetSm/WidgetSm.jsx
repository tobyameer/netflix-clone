import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODMxNGU0ODk2MjAxNTM4NTM2ZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTE3ODI4NSwiZXhwIjoxNzI5NjEwMjg1fQ.zV4z3I46q4gLSKOEp8iwQ9t6lgE7NNPEor3lgQ2rbbY",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, index) => (
          <li className="widgetSmListItem" key={index}>
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
