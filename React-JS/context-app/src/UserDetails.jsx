import { useUserContext } from "./context/user.context";

function UserDetails() {
  let { userDetail } = useUserContext();
  return (
    <>
      {userDetail && (
        <div>
          <h1>User Details</h1>
          <p>
            <strong>Name:</strong> {userDetail.name}
          </p>
          <p>
            <strong>Username:</strong> {userDetail.username}
          </p>
          <p>
            <strong>Email:</strong> {userDetail.email}
          </p>
          <h2>Address</h2>
          <p>
            {userDetail.address.street}, {userDetail.address.suite}
          </p>
          <p>
            {userDetail.address.city} - {userDetail.address.zipcode}
          </p>

          <h2>Company</h2>
          <p>
            <strong>Name:</strong> {userDetail.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {userDetail.company.catchPhrase}
          </p>

          <h2>Contact</h2>
          <p>
            <strong>Phone:</strong> {userDetail.phone}
          </p>
          <p>
            <strong>Website:</strong> {userDetail.website}
          </p>
        </div>
      )}
    </>
  );
}

export default UserDetails;
