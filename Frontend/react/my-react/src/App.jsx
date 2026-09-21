function ProfileCard({ user: { name, role, avatar, isOnline, messages } }) {
  return (
    <div>
      <img
        src={avatar}
        alt={name}
        className="avatar"
        style={{ width: 64, borderRadius: "50%" }}
      />
      <h2>{name.toUpperCase()}</h2>
      <p>الدور: {role}</p>
      <p>الحالة: <span style={{background: isOnline ? 'green' : 'grey', width: 10, height: 10, borderRadius: '50%', display: 'inline-block'}}></span></p>
      {messages > 0 && <p>لديك {messages} رسائل</p>}
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
    messages: 3,
  };

  return (
    <>
      <ProfileCard user={user} />
      <ProfileCard user={user2} />
    </>
  );
}
