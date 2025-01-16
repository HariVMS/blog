"use client";
import Link from "next/link";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "@/Components/HomeContainer";
import InputBox from "./ReusableComponent/InputBox";

const BlogPage = () => {
  const userBlogData = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [blogData, setBlogData] = useState<Item[]>([]);
  const [errors, setErrors] = useState({
    author: "",
    email: "",
    phone: "",
    gender: "",
    title: "",
    descriptions: "",
    img: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const submitButtonDesgin =
    "bg-blue-600 mt-2 p-2 rounded-md text-white  h-11 w-28";
  if (!userBlogData) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  useEffect(() => {
    if (blogData.length > 0) {
      userBlogData.setData(blogData);
    }
  }, [blogData, userBlogData]);

  const validateForm = (formData: FormData) => {
    let isValid = true;
    const newErrors = { ...errors };
    Object.keys(newErrors).forEach((key) => {
      (newErrors as { [key: string]: string })[key] = "";
    });
    const author = formData.get("author") as string;
    if (!author) {
      newErrors.author = "Author is required.";
      isValid = false;
    }

    const email = formData.get("email") as string;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    const phone = formData.get("phone") as string;
    if (!phone || phone.length < 10) {
      newErrors.phone = "Phone number should be at least 10 digits.";
      isValid = false;
    }

    const gender = formData.get("gender") as string;
    if (!gender) {
      newErrors.gender = "Gender is required.";
      isValid = false;
    }

    const title = formData.get("title") as string;
    if (!title) {
      newErrors.title = "Title is required.";
      isValid = false;
    }

    const descriptions = formData.get("descriptions") as string;
    if (!descriptions) {
      newErrors.descriptions = "Description is required.";
      isValid = false;
    }
    const img = formData.get("img") as string;
    if (!img) {
      newErrors.img = "Image URL is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (validateForm(formData)) {
      const formObject: Item = {
        author: formData.get("author") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        gender: formData.get("gender") as string,
        title: formData.get("title") as string,
        descriptions: formData.get("descriptions") as string,
        img: formData.get("img") as string,
      };

      setBlogData((prevBlogData) => {
        const updatedBlogData = [...prevBlogData, formObject];
        return updatedBlogData;
      });
      alert("Added Successfully. Please go to Home.");
    }
  };

  const handelClearData = () => {
    if (formRef.current) {
      formRef.current.reset();
      setDescription("");
      setErrors({
        author: "",
        email: "",
        phone: "",
        gender: "",
        title: "",
        descriptions: "",
        img: "",
      });
    }
  };

  return (
    <>
      <h3 className="text-4xl font-bold">Create Your Blog</h3>
      <form
        className="flex flex-col gap-2 w-full"
        ref={formRef}
        onSubmit={handleInputSubmit}
      >
        <label htmlFor="author">Author :</label>
        <InputBox
          boxName="author"
          id="author"
          placeholder="Author"
          onChange={(e) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              author: "",
            }));
          }}
        />
        {errors.author && <span className="text-red-600">{errors.author}</span>}

        <label htmlFor="email">Email :</label>
        <InputBox
          type="email"
          boxName="email"
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "", 
            }));
          }}
        />
        {errors.email && <span className="text-red-600">{errors.email}</span>}

        <label htmlFor="phone">Phone:</label>
        <InputBox
          type="number"
          boxName="phone"
          id="phone"
          placeholder="Phone"
          onChange={(e) => {
            const phoneValue = e.target.value;

            setErrors((prevErrors) => ({
              ...prevErrors,
              phone: "",
            }));

            if (phoneValue.length < 10) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Phone number should be at least 10 digits.",
              }));
            }
          }}
        />
        {errors.phone && <span className="text-red-600">{errors.phone}</span>}

        <label htmlFor="gender">Gender</label>
        <div className="flex p-3 gap-3">
          <InputBox
            type="radio"
            boxName="gender"
            id="male"
            value="male"
            placeholder="Male"
            onChange={(e) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                gender: "",
              }));
            }}
          />
          <label htmlFor="male">Male</label>
          <InputBox
            type="radio"
            boxName="gender"
            id="female"
            value="female"
            placeholder="Female"
            onChange={(e) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                gender: "", 
              }));
            }}
          />
          <label htmlFor="male">Female</label>
        </div>
        {errors.gender && <span className="text-red-600">{errors.gender}</span>}

        <label htmlFor="title">Title :</label>
        <InputBox
          boxName="title"
          id="title"
          placeholder="Title"
          onChange={(e) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              title: "", 
            }));
          }}
        />
        {errors.title && <span className="text-red-600">{errors.title}</span>}

        <label htmlFor="descriptions">Description :</label>
        <textarea
          className="border rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
          name="descriptions"
          id="descriptions"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              descriptions: "", 
            }));
          }}
          placeholder="Description"
        ></textarea>
        {errors.descriptions && (
          <span className="text-red-600">{errors.descriptions}</span>
        )}

        <label htmlFor="img">Image URL :</label>
        <InputBox
          type="url"
          boxName="img"
          id="img"
          placeholder="Image URL"
          onChange={(e) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              img: "", 
            }));
          }}
        />
        {errors.img && <span className="text-red-600">{errors.img}</span>}

        <div className="flex gap-6">
          <button className={submitButtonDesgin}>Add Data</button>
          <Link href="/view-blog">
            <button type="button" className={submitButtonDesgin}>
              Home
            </button>
          </Link>
          <button
            type="button"
            className={submitButtonDesgin}
            onClick={handelClearData}
          >
            Clear All
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogPage;
