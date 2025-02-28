'use client';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useState, useRef } from 'react';
import { UserContext } from '@/Components/HomeContainer';
import InputBox from './ReusableComponent/InputBox';
import ErrorContainer from './ErrorContainer';
import { BlogFormProps } from '@/interface/BlogForm';
import { Item } from '@/interface';

const BlogForm: React.FC<BlogFormProps> = ({ mode, id }) => {
  const userBlogData = useContext(UserContext);
  if (!userBlogData) {
    throw new Error('UserContext must be used within a UserContext.Provider');
  }

  const isEditMode = mode === 'edit';

  const blogIndex = isEditMode
    ? userBlogData.data.findIndex((blog) => blog.id === id)
    : -1;

  const existingBlog =
    isEditMode && blogIndex >= 0 ? userBlogData.data[blogIndex] : null;

  const [blogData, setBlogData] = useState({
    author: existingBlog?.author || '',
    email: existingBlog?.email || '',
    phone: existingBlog?.phone || '',
    gender: existingBlog?.gender || '',
    title: existingBlog?.title || '',
    descriptions: existingBlog?.descriptions || '',
    img: existingBlog?.img || '',
  });

  const [errors, setErrors] = useState({
    author: '',
    email: '',
    phone: '',
    gender: '',
    title: '',
    descriptions: '',
    img: '',
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const submitButtonDesign = `
  bg-blue-600 
  hover:bg-blue-700 
  focus:ring-4 
  focus:ring-blue-300 
  focus:outline-none 
  cursor-pointer
  mt-2 
  p-3 
  rounded-lg 
  text-white 
  font-semibold 
  text-sm 
  transition-all 
  duration-200 
  ease-in-out
`;

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'author':
        return value ? '' : 'Author is required.';
      case 'email':
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ''
          : 'Enter a valid email.';
      case 'phone':
        return value.length === 10 ? '' : 'Phone number must be 10 digits.';
      case 'gender':
        return value ? '' : 'Gender is required.';
      case 'title':
        return value ? '' : 'Title is required.';
      case 'descriptions':
        return value ? '' : 'Description is required.';
      case 'img':
        return value ? '' : 'Image URL is required.';
      default:
        return '';
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setBlogData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    if (value.length != 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validateField(field, value),
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  };
  const validateForm = (formData: FormData): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    Object.keys(newErrors).forEach((key) => {
      const value = (formData.get(key) as string) || '';
      const error = validateField(key, value);
      if (error) {
        isValid = false;
      }
      newErrors[key as keyof typeof errors] = error;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (validateForm(formData)) {
      const { author, email, phone, gender, title, descriptions, img } =
        blogData;
      const newBlog: Item = {
        id: isEditMode ? id! : uuidv4(),
        author,
        email,
        phone,
        gender,
        title,
        descriptions: descriptions,
        img,
      };

      const updatedBlogs = isEditMode
        ? userBlogData.data.map((blog) => (blog.id === id ? newBlog : blog))
        : [...userBlogData.data, newBlog];

      userBlogData.setData(updatedBlogs);

      alert(
        `${isEditMode ? 'Modified' : 'Added'} Successfully! Please go to Home.`,
      );
    }
  };

  const handleClearData = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setBlogData({
      author: '',
      email: '',
      phone: '',
      gender: '',
      title: '',
      descriptions: '',
      img: '',
    });
    setErrors({
      author: '',
      email: '',
      phone: '',
      gender: '',
      title: '',
      descriptions: '',
      img: '',
    });
  };

  return (
    <>
      <h3 className="text-4xl font-bold">
        {isEditMode ? 'Edit Your Blog' : 'Create Your Blog'}
      </h3>
      <form
        noValidate
        className="flex flex-col gap-2 w-full"
        ref={formRef}
        onSubmit={handleInputSubmit}
      >
        <label htmlFor="author">Author :</label>
        <InputBox
          name="author"
          id="author"
          placeholder="Author"
          value={blogData.author}
          onChange={(e) => handleFieldChange('author', e.target.value)}
          error={errors.author ? true : false}
        />
        <ErrorContainer error={errors.author} />

        <label htmlFor="email">Email :</label>
        <InputBox
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={blogData.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          error={errors.email ? true : false}
        />
        <ErrorContainer error={errors.email} />
        <label htmlFor="phone">Phone:</label>
        <InputBox
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={blogData.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          error={errors.phone ? true : false}
        />
        <ErrorContainer error={errors.phone} />

        <label htmlFor="gender">Gender</label>
        <div className="flex p-3 gap-3 cursor-pointer">
          <InputBox
            type="radio"
            name="gender"
            id="male"
            value="male"
            placeholder="Male"
            checked={blogData.gender === 'male'}
            onChange={(e) => handleFieldChange('gender', e.target.value)}
            error={errors.gender ? true : false}
          />
          <label htmlFor="male" className="cursor-pointer">
            Male
          </label>
          <InputBox
            type="radio"
            name="gender"
            id="female"
            value="female"
            placeholder="Female"
            checked={blogData.gender === 'female'}
            onChange={(e) => handleFieldChange('gender', e.target.value)}
          />
          <label htmlFor="female" className="cursor-pointer">
            Female
          </label>
        </div>
        <ErrorContainer error={errors.gender} />
        <label htmlFor="title">Title :</label>
        <InputBox
          name="title"
          id="title"
          placeholder="Title"
          value={blogData.title}
          onChange={(e) => handleFieldChange('title', e.target.value)}
          error={errors.title ? true : false}
        />
        <ErrorContainer error={errors.title} />

        <label htmlFor="descriptions">Description :</label>
        <textarea
          className="border rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer focus:border-blue-400"
          name="descriptions"
          id="descriptions"
          value={blogData.descriptions}
          onChange={(e) => {
            setBlogData(() => ({
              ...blogData,
              ['descriptions']: e.target.value,
            }));
            handleFieldChange('descriptions', e.target.value);
          }}
          placeholder="Description"
        ></textarea>
        <ErrorContainer error={errors.descriptions} />

        <label htmlFor="img">Image URL :</label>
        <InputBox
          type="url"
          name="img"
          id="img"
          placeholder="Image URL"
          value={blogData.img}
          onChange={(e) => handleFieldChange('img', e.target.value)}
          error={errors.img ? true : false}
        />
        <ErrorContainer error={errors.img} />

        <div className="flex gap-6">
          <button className={submitButtonDesign}>
            {isEditMode ? 'Save' : 'Add Data'}
          </button>
          <Link href="/view-blog">
            <button type="button" className={submitButtonDesign}>
              Home
            </button>
          </Link>
          {mode === 'create' && (
            <button
              type="button"
              className={submitButtonDesign}
              onClick={handleClearData}
            >
              Clear All
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default BlogForm;
