function ProfileCard({ user }) {
  return (
    <div>
      <img
        src={user.avatar}
        alt={user.name}
        className="avatar"
        style={{ width: 64, borderRadius: "50%" }}
      />
      <h2>{user.name.toUpperCase()}</h2>
      <label htmlFor="bio">الدور: {user.role}</label>
      <p>الحالة: <span style={{background: user.isOnline ? 'green' : 'red', width: 10, height: 10, borderRadius: '50%', display: 'inline-block'}}></span></p>
      {user.messages > 0 && <p>لديك {user.messages} رسائل</p>}
    </div>
  );
}

export default function Profile() {
  const user = {
    name: "Waeel",
    role: "Frontend Dev",
    avatar: "https://i.pravatar.cc/100",
    isOnline: false,
    messages: 0,
  };
  const user2 = {
    name: "Ahmed",
    role: "Backend Dev",
    avatar: "https://i.pravatar.cc/100",
    isOnline: true,
    messages: 0,
  };

  return (
    <>
      <ProfileCard user={user} />
      <ProfileCard user={user2} />
    </>
  );
}
