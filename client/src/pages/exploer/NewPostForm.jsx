import { Form } from "react-router-dom";

const NewPostForm = () => {
  return (
    <Form method="POST" className="p-12 ">
      <div className="grid grid-cols-1 gap-12 w-[60rem]">
        <div>Buat pertanyaan baru</div>
        <div>Judul Pertanyaan</div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            카테고리
          </label>
          <input
            className="mt-3 w-full rounded-md border" // Adjusted width
            type="text"
            name="category"
            required
          />
        </div>
        <div>
          <input
            className="mt-3 w-full rounded-full border bg-blue-200" // Adjusted width
            type="text"
            placeholder="제목을 입력하세요"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            내용
          </label>
          <textarea
            className="mt-3 w-full rounded-md border p-12" // Adjusted width
            required
          />
        </div>

        <div className="flex justify-end">
          <button className="mr-12 rounded-md bg-blue-500 px-24 py-12 text-white">
            작성
          </button>{" "}
          {/* Adjusted width */}
          <button className="rounded-md bg-blue-500 px-24 py-12 text-white">
            취소
          </button>{" "}
          {/* Adjusted width */}
        </div>
      </div>
    </Form>
  );
};

export default NewPostForm;
