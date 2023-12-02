import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserInformation = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <div className="user-info-container">
        <div className="user-info-column">
          {user?.picture && (
            <img
              src={user.picture}
              alt={user?.name}
              className="user-avatar"
              style={{ borderRadius: "50%" }} // Add this line for rounded corners
            />
          )}
          <h2>{user?.name}</h2>
        </div>
        <div className="user-info-column">
          <h3>User Details</h3>
          <ul className="user-details-list">
            {Object.keys(user).map((objKey, i) => (
              <li key={i}>
                <strong>{objKey}:</strong>{" "}
                {objKey == "picture" ? (
                  <a href={user.picture}>Link </a>
                ) : (
                  user[objKey]
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  ) : (
    <>
      <p>Sign in to see User Information!</p>
    </>
  );
};

export default UserInformation;
