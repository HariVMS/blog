'use client';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { UserContext } from './HomeContainer';
import InputBox from './ReusableComponent/InputBox';
import ErrorContainer from './ErrorContainer';

const EditBlog = ({ id }: { id: string }) => {
  const userBlogData = useContext(UserContext);

  if (!userBlogData) {
    throw new Error('UserContext must be used within a UserContext.Provider');
  }
  const blogIndex = userBlogData.data.findIndex((blog) => blog.id === id);
  const blogDatas = userBlogData.data[blogIndex];
  const [author, setAuthor] = useState(blogDatas.author || ' ');
  const [email, setEmail] = useState(blogDatas.email || '');
  const [phone, setPhone] = useState(blogDatas.phone || '');
  const [gender, setGender] = useState(blogDatas.gender || '');
  const [title, setTitle] = useState(blogDatas.title || '');
  const [description, setDescription] = useState(blogDatas.descriptions || '');
  const [img, setImg] = useState(blogDatas.img || '');
  const [errors, setErrors] = useState({
    author: '',
    email: '',
    phone: '',
    gender: '',
    title: '',
    descriptions: '',
    img: '',
  });
  if (!blogDatas) {
    return <div className="text-center text-gray-600">Blog post not found</div>;
  }

  const submitButtonDesign = `
    bg-blue-600 
    hover:bg-blue-700 
    focus:ring-4 
    focus:ring-blue-300 
    focus:outline-none 
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
      const updatedBlog = {
        id,
        author,
        email,
        phone,
        gender,
        title,
        descriptions: description,
        img,
      };
      const updatedBlogs = [...userBlogData.data];
      updatedBlogs[blogIndex] = updatedBlog;

      userBlogData.setData(updatedBlogs);

      alert('Modified Successfully! Please Go To Home');
    }
  };

  return (
    <>
      <h3 className="text-4xl font-bold">Edit Your Blog</h3>
      <form
        noValidate
        className="flex flex-col gap-2 w-full"
        onSubmit={handleInputSubmit}
      >
        <label htmlFor="author">Author :</label>
        <InputBox
          name="author"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
            handleFieldChange('author', e.target.value);
          }}
          error={errors.author ? true : false}
        />
        <ErrorContainer error={errors.author} />

        <label htmlFor="email">Email :</label>
        <InputBox
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleFieldChange('email', e.target.value);
          }}
          error={errors.email ? true : false}
        />
        <ErrorContainer error={errors.email} />
        <label htmlFor="phone">Phone:</label>
        <InputBox
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            handleFieldChange('phone', e.target.value);
          }}
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
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <InputBox
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <ErrorContainer error={errors.gender} />
        <label htmlFor="title">Title :</label>
        <InputBox
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleFieldChange('title', e.target.value);
          }}
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
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
            handleFieldChange('img', e.target.value);
          }}
          error={errors.img ? true : false}
        />
        <ErrorContainer error={errors.img} />

        <div className="flex gap-6">
          <button className={submitButtonDesign}>Save</button>
          <Link href="/view-blog">
            <button type="button" className={submitButtonDesign}>
              Home
            </button>
          </Link>
          <button className={submitButtonDesign}>
            <Link href={`/blog-details/${id}`}>View More</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default EditBlog;
