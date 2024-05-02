import { auth } from "@clerk/nextjs";

export default function Profile() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  return userId;
}
