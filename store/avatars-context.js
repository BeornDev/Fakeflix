import React, { useState } from "react";

const AvatarsContext = React.createContext({
  avatars: [],
  avatarToShow: {},
  changeAvatar: () => {},
});

export default AvatarsContext;

export function AvatarsProvider(props) {
  const [avatarsList, setAvatarsList] = useState([
    {
      id: 123,
      name: "Razhiel",
      icon: "https://avatars.dicebear.com/api/avataaars/razhiel.svg",
      color: "#d64161",
    },
    {
      id: 323,
      name: "Kain",
      icon: "https://avatars.dicebear.com/api/avataaars/kain.svg",
      color: "#ff7b25",
    },
    {
      id: 456,
      name: "Lelouch",
      icon: "https://avatars.dicebear.com/api/avataaars/lelouch.svg",
      color: "#6b5b95",
    },
  ]);
  const [avatarToShow, setAvatarToShow] = useState({
    id: 123,
    name: "Razhiel",
    icon: "https://avatars.dicebear.com/api/avataaars/razhiel.svg",
    color: "#d64161",
  });

  const avatarsContext = {
    avatars: avatarsList,
    avatarToShow,
    changeAvatar: (id) =>
      setAvatarToShow(avatarsList.find((avatar) => avatar.id === id)),
  };
  return (
    <AvatarsContext.Provider value={avatarsContext}>
      {props.children}
    </AvatarsContext.Provider>
  );
}
