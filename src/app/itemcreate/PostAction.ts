'use server'

import { Amplify } from "aws-amplify";
import outputs from '../../../amplify_outputs.json'
Amplify.configure(outputs)
import { type Schema } from "../../../amplify/data/resource";

import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";


const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

/**
 * Itemフォーム
 * @param state 
 * @param formData 
 * @returns 
 */
export async function PostAction(state: any, formData: FormData) {

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as  "WEPON" | "ARMOR" | "FOOD" | "MEDICINE" | null | undefined;
    let price = 0;
    const inputPrice = formData.get('price')as unknown;
    if (inputPrice) {
      if (!Number.isNaN(inputPrice)) {
        price = inputPrice as number
      }
    }
    
    try {
      const response = await cookiesClient.models.Item.create({
        name: name,
        category: category,
        price: price,
        description: description,
      });
      console.log('-----Success:', response)
      return {
        message: 'OK',
      }
    } catch (e) {
      console.log('-----Error:', e)
    }
   
}
