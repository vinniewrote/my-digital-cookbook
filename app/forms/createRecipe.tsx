'use client'
import '../globals.css'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
type Inputs = {
    quantity: string
    unit: string
    ingredientName: string
    additionalNotes: string
}
export default function CreateRecipeForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch('ingredientName')) // watch input value by passing the name of it
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form
            className="flex flex-col gap-y-1"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="toprow">
                <select
                    className="px-2 py-2"
                    id="quant"
                    {...register('quantity', { required: true })}
                >
                    <option>-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>1/2</option>
                    <option>1/3</option>
                </select>
                {errors.quantity && <span>Quantity is required</span>}
                <select
                    className="px-2 py-2"
                    id="unit"
                    {...register('unit', { required: true })}
                >
                    <option>-</option>
                    <option>whole</option>
                    <option>diced</option>
                </select>
                {errors.unit && <span>Unit is required</span>}
                <input
                    className="px-2 py-2"
                    defaultValue="Ingredient name"
                    {...register('ingredientName', { required: true })}
                />
                <input
                    className="px-2 py-2"
                    defaultValue="Additional notes"
                    {...register('additionalNotes', { required: false })}
                />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div className="Buttonrow flex flex-row">
                <div className="createTools flex flex-row justify-start gap-x-1 w-9/12">
                    <button className="flex flex-row px-5 py-4 border-2 border-white rounded-md">
                        <Image
                            className="dark:invert"
                            src="/add.svg"
                            alt="digicook add"
                            width={24}
                            height={24}
                            priority
                        />
                        Ingredient
                    </button>
                    <button className="flex flex-row px-5 py-4 border-2 border-white rounded-md">
                        <Image
                            className="dark:invert"
                            src="/add.svg"
                            alt="digicook add"
                            width={24}
                            height={24}
                            priority
                        />
                        Ingredient Group
                    </button>
                    <button className="flex flex-row px-5 py-4 border-2 border-white rounded-md">
                        <Image
                            className="dark:invert"
                            src="/add.svg"
                            alt="digicook add"
                            width={24}
                            height={24}
                            priority
                        />
                        Instructions
                    </button>
                    <button className="flex flex-row px-5 py-4 border-2 border-white rounded-md">
                        <Image
                            className="dark:invert"
                            src="/add.svg"
                            alt="digicook add"
                            width={24}
                            height={24}
                            priority
                        />
                        Image
                    </button>
                </div>
                <div className="actionTools flex justify-end w-3/12">
                    <button className="px-5 py-4 border rounded-md flex flex-row">
                        <Image
                            className="dark:invert"
                            src="/cancel.svg"
                            alt="digicook add"
                            width={24}
                            height={24}
                            priority
                        />
                        Cancel
                    </button>
                    <input
                        className="px-5 py-4 border rounded-md flex flex-row"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    )
}
