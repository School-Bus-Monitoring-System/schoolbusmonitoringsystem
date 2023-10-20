import { useAuthValue } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

// This is the profile Component
function Profile() {

  // Use the useAuthValue hook to get the current user
  const { currentUser } = useAuthValue();

  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>

        {/* Use the signOut function to sign out the current user */}
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  );
}

// Export the Profile component
export default Profile;