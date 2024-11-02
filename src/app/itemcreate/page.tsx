'use client'

import { useFormState } from 'react-dom'
import { PostAction } from './PostAction'

const options = [
  { id: 'WEPON', label: '武器' },
  { id: 'ARMOR', label: '防具' },
  { id: 'FOOD', label: '食品' },
  { id: 'MEDICINE', label: '薬品' },
];

const initialState = { message: '' }

export default function ItemCreate() {

  const [state, formAction] = useFormState(PostAction, initialState)

  return (
    <>
      <div className="className='mx-60 mt-10 flex justify-center">

        <form action={formAction}>
          <h1 className="text-xl m-3">アイテム登録</h1>

          <div className='m-3'>
            <label>名前</label>
            <input 
              type="text" 
              name="name" 
              className="form-basic" 
              placeholder="名前" 
            />
          </div>

          <div className='m-3'>
            <label>価格</label>
            <input 
              type="text" 
              name="price" 
              className="form-basic" 
              placeholder="価格" 
            />
          </div>

          <div className='m-3'>
            <label className="block mb-2">カテゴリー</label>
            <select name='category' 
            className="select-box">
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className='m-3'>
            <label>説明</label>
            <input 
              type="text" 
              name="description" 
              className="form-basic" 
              placeholder="説明" 
            />

          </div>
          <div className='m-3'>
            <button type="submit" className="btn-green">登録</button>
          </div>

          <p>{state?.message}</p>

        </form>
      </div>
    </>
  )
}