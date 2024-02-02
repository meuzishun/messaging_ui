import { useState, useEffect } from 'react';
import ProfileField from '../ProfileField/ProfileField';

function Profile() {
  const [profile, setProfile] = useState(null);

  const onInputChange = (label, value) => {
    setProfile((prev) => ({ ...prev, [label]: value }));
  };

  if (profile) {
    console.log(Object.entries(profile));
  }

  useEffect(() => {
    setProfile({
      name: 'Andrew Smith',
      email: 'asmith@email.com',
      title: 'Super awesome guy',
    });
  }, []);

  return (
    <div>
      {profile
        ? Object.entries(profile).map((arr, i) => (
            <ProfileField
              key={i}
              label={arr[0]}
              content={arr[1]}
              onInputChange={onInputChange}
            />
          ))
        : null}
    </div>
  );
}

export default Profile;
