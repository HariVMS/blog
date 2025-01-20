import React from 'react';
import { DeletePopupProps } from '@/interface/DeletePopup';

const DeletePopup: React.FC<DeletePopupProps> = ({
  handleDelete,
  closePopup,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center min-[1800px]:w-[30%] min-[1800px]:p-10">
        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
        <p className="text-gray-600 mb-6">
          Do you really want to delete this item? This action cannot be undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
            onClick={closePopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
