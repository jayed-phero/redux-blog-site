import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { GetImageUrl } from '../../../api/ImageHosting';
import postBlogData from '../../../Redux/thunk/addBlog';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const AddBlog = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)




    const onSubmit = data => {
        console.log(data)
        const date = new Date()
        const current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        var date_time = current_date+" "+current_time;
        const image = data.image[0]
        const category = data.category
        const title = data.title
        const firstDetails = data.firstDetails
        const secondDetails = data.secondDetails
        const thirdDetails = data.thirdDetails
        console.log(date)

        setLoading(true)
        GetImageUrl(image)
            .then(imgLink => {
                console.log(imgLink)

                if (imgLink) {
                    const blogData = {
                        image: imgLink,
                        category,
                        title,
                        firstDetails,
                        secondDetails,
                        thirdDetails,
                        current_date,
                        current_time
                    }

                    dispatch(postBlogData(blogData))
                    setLoading(false)
                }
                setLoading(false)
            })

    };
    return (
        <div className='px-5 py-9'>
            <section class="p-6 max-w-5xl mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Share your concept for people</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <label for="image" class="block text-sm text-gray-500 dark:text-gray-300">Banner Image</label>

                            <input type="file" class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                                {...register("image")}
                                required
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Category</label>
                            <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                {...register("category")}
                                required
                            >
                                <option>Select</option>
                                <option selected value='kalima'>Kalima</option>
                                <option value='solat'>Solat</option>
                                <option value='romadan'>Siyam</option>
                                <option value='kalima'>Zakat</option>
                                <option value='hazz'>Hazz</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" >Title</label>
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                placeholder='Minimum 25 Letter is Needed'
                                {...register("title", { required: true })}
                                required
                            />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">First Details</label>
                            <textarea id="passwordConfirmation" class="block w-full px-4 h-24 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                placeholder='Minimum 201 Letter is Needed !!!'
                                {...register("firstDetails", { required: true, maxLength: 401, minLength: 201 })}
                                required
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" >Second Details</label>
                            <textarea class="block w-full px-4 h-24 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                placeholder='Minimum 101 Letter is Needed !!!'
                                {...register("secondDetails", { required: true, maxLength: 501, minLength: 101 })}
                                required
                            />
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" >Third Details</label>
                            <textarea class="block w-full px-4 h-24 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                placeholder='Minimum 51 Letter is Needed !!!'
                                {...register("thirdDetails", { required: true, maxLength: 501, minLength: 51 })}
                                required
                            />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button type='submit' class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">{loading ? <SmallSpinner /> : "Save & Post"}</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddBlog;