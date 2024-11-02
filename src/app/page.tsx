'use client';

import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Amplify } from "aws-amplify";
import outputs from '../../amplify_outputs.json'
Amplify.configure(outputs)
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>()

export default function Home() {

  const [items, setItems] = useState<Schema["Item"]["type"][]>([]);
  const [isError, setIsEnptyError] = useState(false);
  const errormsg = 'データはありません'

  /** 表示アイテム内容を取得 */
  const fetchItems = async () => {
    try {
      const { data: items, errors } = await client.models.Item.list();
      console.log(items)
      console.log(errors)

      if (items.length == 0) {
        setIsEnptyError(true);
      }
      setItems(items);
    } catch (e) {
      console.log(e);
      setIsEnptyError(true)
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);


  return (
    <div className='mx-20 mt-10'>
      <div>

        <h1 className="text-4xl">商品一覧画面</h1>

        <div className="m-4">
          {isError === true && (
            <h1 className="text-2xl">{errormsg}</h1>
          )}
        </div>

        <div>
          <div>
            <div className="m-4">
              <NextLink href="/itemcreate">
                <button className="btn-green">Item登録へ</button>
              </NextLink>
            </div>

            {isError === false && (
              <ul className="m-4">
                <div className="grid grid-cols-3 gap-4 m-4">
                  {items.map(({ id, name, category, price }) => (
                    <li className=" bg-slate-300" key={id}>
                      <div>アイテム名：{name}</div>
                      <div>カテゴリー：{category}</div>
                      <div>価格：{price}円</div>
                    </li>
                  ))}
                  <li className=" h-8 p-2">
                  </li>
                </div>
              </ul>
            )}
          </div>
        </div>
 
      </div>

    </div >
  );
}