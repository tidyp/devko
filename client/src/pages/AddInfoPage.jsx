import { useImperativeHandle, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

const AddinfoPage = () => {
  const googleID = cookie.load("googleId");
  const naverID = cookie.load("naverId");
  const googleImage = cookie.load("googleImage");
  const naverImage = cookie.load("naverImage");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    workPosition: "",
    interestArea: "",
    selfDescription: "",
    userName: "",
    notification: "",
    googleId: googleID,
    naverId: naverID,
    googleImage: googleImage,
    naverImage: naverImage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/additionalInfo/step3`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        const jsonData = await res.json();

        cookie.save("uuid", jsonData.uuid);
        cookie.save("userName", jsonData.userName);
        cookie.save("userImage", jsonData.userImage);
        navigate("/");
      } else {
        console.error("Error submitting form:", res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // 이미지
  const handleInputChangeImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-2xl">내 정보</h1>
      <div className="w-20">
        {!googleImage && !naverImage && (
          <img
            className="1 rounded-full"
            // src={userInfo.profileImage}
            src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${Math.floor(
              Math.random() * 16,
            )}`}
            alt="Preview"
          />
        )}
        {googleImage && (
          <imgx
            className="2 rounded-full"
            src={googleImage || userInfo.profileImage}
            alt="Preview"
          />
        )}
        {naverImage && (
          <img
            className="4 rounded-full"
            src={naverImage || userInfo.profileImage}
            alt="Preview"
          />
        )}
      </div>
      <input
        type="file"
        name="profileImage"
        onChange={handleInputChangeImage}
      />
      <form className="mt-8 flex flex-col gap-8">
        <div className="flex w-[30rem] items-center justify-between text-xl uppercase">
          <label>username:</label>
          <input
            className="border-b-[1px] border-[#e5e5e5]"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex w-[30rem] items-center justify-between text-xl uppercase">
          <label>email:</label>
          <input
            className="border-b-[1px] border-[#e5e5e5]"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div> */}
        <div className="flex w-[30rem] items-center justify-between text-xl uppercase">
          <label>selfDescription:</label>
          <input
            className="border-b-[1px] border-[#e5e5e5]"
            type="text"
            name="selfDescription"
            value={formData.selfDescription}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-[30rem] items-center justify-between text-xl uppercase">
          <label>workPosition:</label>
          <input
            className="border-b-[1px] border-[#e5e5e5]"
            type="text"
            name="workPosition"
            value={formData.workPosition}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-[30rem] items-center justify-between text-xl uppercase">
          <label>interestArea:</label>
          <input
            className="border-b-[1px] border-[#e5e5e5]"
            type="text"
            name="interestArea"
            value={formData.interestArea}
            onChange={handleChange}
          />
        </div>
        <div
          onClick={handleSubmit}
          className="flex items-center justify-center rounded-full  bg-black p-2 text-white"
        >
          완료
        </div>
      </form>
    </div>
  );
};

export default AddinfoPage;
