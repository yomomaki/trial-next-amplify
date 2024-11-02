import NextLink from "next/link";

import { AuthGetCurrentUserServer } from "@/utils/amplify-utils";


export default async function Header() {

  const authenticatedUser = await AuthGetCurrentUserServer();
  let signin = 'ログイン';
  if (authenticatedUser) {
    signin = 'ログアウト';
  }

  return (
    <div className="h-24">
      <div className="border-2 h-24">
        <div className="flex justify-evenly m-4">
          <NextLink href="../" className="text-4xl">mayo app</NextLink>
          <div className="flex justify-evenly m-2">
            <div className="m-2">
              <NextLink href="/signin">
              <button className="btn-green">
                {signin}
              </button>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}