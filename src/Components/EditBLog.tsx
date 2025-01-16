"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "./HomeContainer";
import InputBox from "./ReusableComponent/InputBox";

const EditBLogs = ({ id }: { id: string }) => {
  const userBlogData = useContext(UserContext);

  if (!userBlogData) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const blogDatas = userBlogData.data[Number(id)];

  if (id === "01") {
    return (
      <div className="flex flex-col items-center justify-center ml-96 gap-6">
        <p className="text-lg font-medium text-gray-600">
          This Blog Post is only for sample preview. Please create a new blog.
        </p>
        <button className={`${userBlogData.css.readButton} max-w-[560px]`}>
          Create Blog
        </button>
      </div>
    );
  } else if (!blogDatas) {
    return <div className="text-center text-gray-600">Blog post not found</div>;
  }

  const submitButtonDesign =
    "bg-blue-600 mt-2 p-2 rounded-md text-white font-bold";

  const [author, setAuthor] = useState(blogDatas.author || " ");
  const [email, setEmail] = useState(blogDatas.email || "");
  const [phone, setPhone] = useState(blogDatas.phone || "");
  const [gender, setGender] = useState(blogDatas.gender || "");
  const [title, setTitle] = useState(blogDatas.title || "");
  const [description, setDescription] = useState(blogDatas.descriptions || "");
  const [img, setImg] = useState(blogDatas.img || "");
  const [errors, setErrors] = useState({
    author: "",
    email: "",
    phone: "",
    gender: "",
    title: "",
    descriptions: "",
    img: "",
  });
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
      const updatedBlog = {
        author,
        email,
        phone,
        gender,
        title,
        descriptions: description,
        img,
      };
      const updatedBlogs = [...userBlogData.data];
      updatedBlogs[Number(id)] = updatedBlog;

      userBlogData.setData(updatedBlogs);

      alert("Modified Successfully! Please Go To Home");
    }
  };

  return (
    <>
      <h3 className="text-4xl font-bold">Edit Your Blog</h3>
      <form className="flex flex-col gap-2 w-full" onSubmit={handleInputSubmit}>
        <label htmlFor="author">Author :</label>
        <InputBox
          boxName="author"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => {
            const authorValue = e.target.value;
            setAuthor(e.target.value);

            setErrors((prevErrors) => ({
              ...prevErrors,
              author: "",
            }));

            if (authorValue.length <= 0) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                author: "Author Filed Should not be Empty",
              }));
            }
          }}
        />
        {errors.author && <span className="text-red-600">{errors.author}</span>}

        <label htmlFor="email">Email :</label>
        <InputBox
          type="email"
          boxName="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            const emailValue = e.target.value;
            setEmail(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));

            if (emailValue.length <= 0) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email Filed Should not be Empty",
              }));
            }
          }}
        />
        {errors.email && <span className="text-red-600">{errors.email}</span>}

        <label htmlFor="phone">Phone:</label>
        <InputBox
          type="number"
          boxName="phone"
          id="phone"
          placeholder="Phone"
          value={phone}
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
            setPhone(e.target.value);
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
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          {errors.gender && (
            <span className="text-red-600">{errors.gender}</span>
          )}

          <label htmlFor="male">Male</label>
          <InputBox
            type="radio"
            boxName="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>

        <label htmlFor="title">Title :</label>
        <InputBox
          boxName="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            const titleValue = e.target.value;

            setErrors((prevErrors) => ({
              ...prevErrors,
              title: "",
            }));

            if (titleValue.length < 10) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                title: "Tilte Filed Should not be Empty",
              }));
            }
            setTitle(e.target.value);
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
            const descriptionValue = e.target.value;

            setDescription(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              descriptions: "",
            }));

            if (descriptionValue.length <= 0) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                descriptions: "Description Filed Should not be Empty",
              }));
            }
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
          value={img}
          onChange={(e) => {
            const imgValue = e.target.value;
            setImg(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              img: "",
            }));

            if (imgValue.length <= 0) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                img: "ImageURl Filed Should not be Empty",
              }));
            }
          }}
        />
        {errors.img && <span className="text-red-600">{errors.img}</span>}

        <div className="flex gap-6">
          <button className={submitButtonDesign}>Save</button>
          <Link href="/view-blog">
            <button type="button" className={submitButtonDesign}>
              Home
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default EditBLogs;
