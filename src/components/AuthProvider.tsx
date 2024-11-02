'use client';

import { Authenticator, View } from '@aws-amplify/ui-react';

/** Authenticatorをラップするプロバイダー */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authenticator.Provider>
      <View>{children}</View>
    </Authenticator.Provider>
  );
}