
"use client";

import NextLink from "next/link";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../../../amplify_outputs.json";
Amplify.configure(outputs);

import { I18n } from 'aws-amplify/utils';
import { L10n } from '../../../src/lib/l10n';

I18n.setLanguage('ja');
I18n.putVocabularies(L10n);


export default function Login() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <div className='mx-60 mt-10'>
            <h1 className="text-4xl">ログイン中</h1>

            <div className='m-2'>
              <button className="btn-green" onClick={signOut}
              >ログアウト</button>
            </div>

            <div className='m-2'>
              <NextLink href="./">
                <button className="btn-green">戻る</button>
              </NextLink>
            </div>
          </div>

        </main>
      )}
    </Authenticator>
  );
}