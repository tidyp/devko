import { useImperativeHandle, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
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
      
        cookie.save("uuid", jsonData.uuid)
        cookie.save("userName", jsonData.userName)
        cookie.save("userImage", jsonData.userImage)
        navigate("/");
      } else {
        console.error("Error submitting form:", res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex h-dvh flex-col items-center justify-center p-4">
      <div className="mb-4 text-lg font-bold text-blue-900">
        추가정보를 입력해주세요
      </div>
      <div className="w-[40rem]">
        <div className="flex flex-col gap-8">
          <input
            type="text"
            name="userName"
            placeholder="닉네임"
            value={formData.userName}
            onChange={handleChange}
            className="rounded-md border p-2"
          />
          <input
            type="text"
            name="workPosition"
            placeholder="직무"
            value={formData.workPosition}
            onChange={handleChange}
            className="rounded-md border p-2"
          />
          <input
            type="text"
            name="interestArea"
            placeholder="관심분야"
            value={formData.interestArea}
            onChange={handleChange}
            className="rounded-md border p-2"
          />
          <input
            type="text"
            name="selfDescription"
            placeholder="내 소개"
            value={formData.selfDescription}
            onChange={handleChange}
            className="rounded-md border p-2"
          />
          <input
            type="checkbox"
            name="notification"
            placeholder="알림수신"
            value={formData.notification}
            onChange={handleChange}
            className="rounded-md border p-2"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mr-2 rounded-md bg-blue-500 p-2 text-white"
        >
          Skip
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-green-500 p-2 text-white"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
