import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

function ProfileCard() {
  return (
    <div>
      <Card>
        <Image
          src={"/public/hero.jpg"}
          alt="image of yohannes haile"
          width={200}
          height={200}
        />
      </Card>
    </div>
  );
}

export default ProfileCard;
