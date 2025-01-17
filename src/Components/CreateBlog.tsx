'use client';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useState, useEffect, useRef } from 'react';
import { UserContext } from '@/Components/HomeContainer';
import InputBox from './ReusableComponent/InputBox';
import ErrorContainer from './ErrorContainer';
import { Item } from '@/interface/interface';

const CreateBlog = () => {
  const userBlogData = useContext(UserContext);
  const [description, setDescription] = useState('');
  const [blogData, setBlogData] = useState<Item[]>([]);
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
  const submitButtonDesign =
    'bg-blue-600 mt-2 p-2 rounded-md text-white h-11 w-28';

  if (!userBlogData) {
    throw new Error('UserContext must be used within a UserContext.Provider');
  }

  useEffect(() => {
    if (blogData.length > 0) {
      userBlogData.setData(blogData);
    }
  }, [blogData, userBlogData]);

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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validateField(field, value),
    }));
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    Object.keys(newErrors).forEach((key) => {
      const value = formData.get(key) as string;
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
      const formObject: Item = {
        id: uuidv4(),
        author: formData.get('author') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        gender: formData.get('gender') as string,
        title: formData.get('title') as string,
        descriptions: formData.get('descriptions') as string,
        img: formData.get('img') as string,
      };

      setBlogData((prevBlogData) => [...prevBlogData, formObject]);
      alert('Added Successfully. Please go to Home.');
    }
  };

  const handleClearData = () => {
    if (formRef.current) {
      formRef.current.reset();
      setDescription('');
      setErrors({
        author: '',
        email: '',
        phone: '',
        gender: '',
        title: '',
        descriptions: '',
        img: '',
      });
    }
  };

  return (
    <>
      <h3 className="text-4xl font-bold">Create Your Blog</h3>
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
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          error={errors.phone ? true : false}
        />
        <ErrorContainer error={errors.phone} />

        <label htmlFor="gender">Gender</label>
        <div className="flex p-3 gap-3">
          <InputBox
            type="radio"
            name="gender"
            id="male"
            value="male"
            placeholder="Male"
            onChange={(e) => handleFieldChange('gender', e.target.value)}
            error={errors.gender ? true : false}
          />
          <label htmlFor="male">Male</label>
          <InputBox
            type="radio"
            name="gender"
            id="female"
            value="female"
            placeholder="Female"
            onChange={(e) => handleFieldChange('gender', e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <ErrorContainer error={errors.gender} />
        <label htmlFor="title">Title :</label>
        <InputBox
          name="title"
          id="title"
          placeholder="Title"
          onChange={(e) => handleFieldChange('title', e.target.value)}
          error={errors.title ? true : false}
        />
        <ErrorContainer error={errors.title} />

        <label htmlFor="descriptions">Description :</label>
        <textarea
          className="border rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
          name="descriptions"
          id="descriptions"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
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
          onChange={(e) => handleFieldChange('img', e.target.value)}
          error={errors.img ? true : false}
        />
        <ErrorContainer error={errors.img} />

        <div className="flex gap-6">
          <button className={submitButtonDesign}>Add Data</button>
          <Link href="/view-blog">
            <button type="button" className={submitButtonDesign}>
              Home
            </button>
          </Link>
          <button
            type="button"
            className={submitButtonDesign}
            onClick={handleClearData}
          >
            Clear All
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
